function YiResolver () {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Yi')) {
        
        const partialName = name.slice(2)
        return {
          name: 'Yi' + partialName,
          from: `@yixianzi/components`,
          sideEffects: `@yixianzi/components/es/${partialName}/style/index.css`
        }
      }
    }
  }
}

module.exports = {
  YiResolver
}
