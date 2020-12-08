let notEditableValueStorage = {
  _storage: {},
  _nextIndex: 0,
  getNextIndex () {
    return this._nextIndex++
  },
  get (key) {
    return this._storage[key]
  },
  set (key, value) {
    this._storage[key] = value
  },
  remove (key) {
    delete this._storage[key]
  },
  reset () {
    this._storage = {}
  }
}

const stringifyReplacer = function (key, value) {
  try {
  	const valueType = typeof value
  	if (valueType === 'undefined'
    || valueType === 'function'
    || valueType === 'symbol'
    || JSON.stringify(value) === undefined) {
      const index = notEditableValueStorage.getNextIndex()
    	notEditableValueStorage.set(index, value)
    	return `>>>>>>>>>> not editable value [${index}]`
    }
  } catch (e) {
  	const index = notEditableValueStorage.getNextIndex()
    notEditableValueStorage.set(index, value)
    return `>>>>>>>>>> not editable value [${index}]`
  }
  return value
}

const parseReplacer = function (key, value) {
  try {
    if (typeof value !== 'string') {
      return value
    }
    const startIndex = value.indexOf('>>>>>>>>>> not editable value [')
    if (startIndex >= 0) {
      // 從 >>>>>>>>>> not editable value [index] 中取得index
      const storageIndex = value.substring(31, value.length - 1)
      const parsedValue = notEditableValueStorage.get(storageIndex)
      notEditableValueStorage.remove(storageIndex) // 取得值後即刪除，才不會殘留用不到的資料
      return parsedValue
    } 
  } catch (e) { throw (e) }
  return value
}

export function jsonStringify (json) {
	let jsonString = ''
  if (json != null) {
    try {
      jsonString = JSON.stringify(json, stringifyReplacer, 2)
    } catch (e) { throw (e) }
  }
  return jsonString
}

export function jsonParse (jsonString) {
	let json = {}
	if (jsonString) {
    try {
      json = JSON.parse(jsonString, parseReplacer)
    } catch (e) { throw (e) }
  }
  return json
}

export function jsonClone (json) {
  notEditableValueStorage.reset() // 重置
  try {
    return jsonParse(jsonStringify(json))
  } catch (e) { throw (e) }
}
