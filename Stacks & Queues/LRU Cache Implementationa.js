// LRU Cache Implementations
class LRU {
	constructor(capacity) {
		this.capacity = capacity;
		this.map = new Map();
	}
	getValue(key) {
		if (!this.map.has(key)) return -1;
		let v = this.map.get(key);
		this.map.delete(key);
		this.map.set(key, v);
		return this.map.get(key);
	}

	setValue(key, value) {
		if (this.map.size < this.capacity) {
			this.map.set(key, value);
		} else {
			this.map.delete(this.map.keys().next().value);
			this.map.set(key, value);
		}
	}
}
let a = new LRU(2);
a.setValue(1, "APPLE");
a.setValue(2, "AMAZON");
a.setValue(3, "GOOGLE");
console.log(a.getValue(1));
