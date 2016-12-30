function Kopi (kopi, sugar, evaporatedMilk, condensedMilk, ice, cost, steps) {
  this.kopi = 2
  this.sugar = 2
  this.evaporatedMilk = false
  this.condensedMilk = true
  this.ice = false
  this.cost = 1.50
  this.steps = ['pour in a wee dram of condensed milk']
  this.breakdown = function (order) {
    if (order.includes('po')) {
      this.kopi = 1
      this.steps.push('pour in 1 portion of kopi')
    } else if (order.includes('gau')) {
      this.kopi = 3
      this.cost += 0.20
      this.steps.push('pour in 3 portions of kopi')
    } else {
      // default kopi object having 2x kopi
      this.steps.push('pour in 2 portions of kopi')
    }
    if (order.includes('kosong')) {
      this.sugar = 0
    } else if (order.includes('siu dai')) {
      this.sugar = 1
      this.steps.push('add 1 cube of sugar')
    } else if (order.includes('gah dai')) {
      this.sugar = 3
      this.steps.push('add 3 cubes of sugar')
    } else {
      // default kopi object having 2x sugar
      this.steps.push('add 2 cubes of sugar')
    }
    if (order.includes('kopi c')) {
      this.evaporatedMilk = true
      this.condensedMilk = false
      this.cost += 0.20
      var i = this.steps.indexOf('pour in a wee dram of condensed milk')
      this.steps.splice(i, 1)
      this.steps.push('pour in a wee dram of evaporated milk')
    }
    if (order.includes('kopi o')) {
      this.condensedMilk = false
      var j = this.steps.indexOf('pour in a wee dram of condensed milk')
      this.steps.splice(j, 1)
    }
    if (order.includes('peng')) {
      this.ice = true
      this.cost += 0.20
      this.steps.push('throw in a glassful of ice')
    }
    this.steps.push('charge the customer $' + (this.cost).toFixed(2))
    return kopiOrder
  }
}

var kopiOrder = new Kopi()
console.log(kopiOrder.breakdown('kopi o kosong gau peng'))
