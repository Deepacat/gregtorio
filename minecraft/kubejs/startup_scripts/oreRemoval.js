WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = ['create:zinc_ore']
    })
})