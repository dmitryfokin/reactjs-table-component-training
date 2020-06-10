export function childrenSubscribers() {
  const listeners = {}
  return {
    subscribe( type, cb, description ) {
      if ( !Array.isArray( listeners[type] ) ) {
        listeners[type] = []
      }
      listeners[type].push( {cb: cb, description: description} )

      return () => listeners[type].filter( action => action.cb !== cb )
    },
    unsubscribe( type = '' ) {
      if ( type ) {
        listeners[type] = []
      } else {
        Object.keys( listeners )
          .forEach( key => listeners[key] = [] )
      }
    },
    run( type ) {
      if ( Array.isArray( listeners[type] ) ) {
        listeners[type].forEach( action => action.cb() )
      }
    },
    list() {
      Object.keys( listeners )
        .forEach( key => console.log( 'key', key, 'actions', listeners[key] ) )
    }
  }
}
