class StateMachine {
  constructor (initialState, transitions) {
    this.state = initialState
    this.transitions = transitions
  }

  transition (transitionName) {
    var nextState = this.transitions[this.state][transition]
    if (!nextState) throw new Error(`invalid: ${this.state} -> ${transitionName}`)
    this.state = nextState
  }
}

module.exports = StateMachine
