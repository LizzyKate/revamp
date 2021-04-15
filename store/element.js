import {
  buttonProps,
  columnProps,
  imageProps,
  socialProps,
  textProps,
  spacerProps,
  settings,
} from '../data/elements'

export const state = () => ({
  content: 'content',
  elements: true,
  elementSettings: false,
  currentSideBar: {
    name: '',
    outerIndex: null,
    innerIndex: null,
  },
  column: [
    {
      list: [{}],
      properties: { ...columnProps },
    },
  ],
  container: {
    ...settings,
  },
})

export const mutations = {
  displayElements(state, payload) {
    state.content = 'content'
    state.elements = payload
  },
  displayElementSettings(state, payload) {
    state.content = 'content'
    state.elementSettings = payload
  },
  displaySectionSettings(state, payload) {
    state.currentSideBar.outerIndex = payload.outerIndex
    // state.content = 'sectionSettings'
  },
  switchColumn(state, payload) {
    state.column = payload
  },
  setColumn(state, payload) {
    state.content = payload
  },
  AddRows(state, payload) {
    const { amount, index, element } = payload
    if (element) {
      state.column.splice(index, 0, {
        list: [{ ...spacerProps }],
        properties: { ...columnProps },
      })
      state.content = 'sectionSettings'
    } else if (amount === 1) {
      state.column.splice(index, 0, {
        list: [{}],
        properties: { ...columnProps },
      })
      state.content = 'sectionSettings'
    } else if (amount === 2) {
      state.column.splice(index, 0, {
        list: [{}, {}],
        properties: { ...columnProps },
      })
      state.content = 'sectionSettings'
    } else if (amount === 3) {
      state.column.splice(index, 0, {
        list: [{}, {}, {}],
        properties: { ...columnProps },
      })
      state.content = 'sectionSettings'
    } else if (amount === 4) {
      state.column.splice(index, 0, {
        list: [{}, {}, {}, {}],
        properties: { ...columnProps },
      })
      state.content = 'sectionSettings'
    }
  },
  AddElement(state, payload) {
    const { type, outerIndex, innerIndex } = payload
    let editor
    let sideBar
    let editorProperties
    switch (type) {
      case 'TEXT':
        editor = 'Content'
        editorProperties = textProps
        sideBar = 'textEditorVue'
        break
      case 'IMAGE':
        editor = 'Photo'
        editorProperties = imageProps
        sideBar = 'imageEditorVue'
        break
      case 'BUTTON':
        editor = 'Button'
        editorProperties = buttonProps
        sideBar = 'buttonEditorVue'
        break
      case 'SOCIAL':
        editor = 'Social'
        editorProperties = socialProps
        sideBar = 'socialEditorVue'
        break
      case 'SPACER':
        editor = 'Spacer'
        editorProperties = spacerProps
        sideBar = 'spacerEditorVue'
        break
      default:
        break
    }
    if (innerIndex === undefined) {
      state.column[outerIndex].list.push({
        name: editor,
        id: Math.random(),
        ...editorProperties,
      })
    } else {
      console.log(outerIndex, innerIndex, 'hhh')
      state.column[outerIndex].list.splice(innerIndex, 1, {
        name: editor,
        id: Math.random(),
        ...editorProperties,
      })
    }

    state.currentSideBar.name = sideBar
    state.currentSideBar.outerIndex = outerIndex === undefined ? 0 : outerIndex
    state.currentSideBar.innerIndex = innerIndex === undefined ? 0 : innerIndex
    // state.currentSideBar.name = sideBar
    state.content = 'content'
  },

  displaySideBar(state, payload) {
    const { type, outerIndex, innerIndex } = payload
    let sideBar
    switch (type) {
      case 'Text':
        sideBar = 'textEditorVue'
        break
      case 'Image':
        sideBar = 'imageEditorVue'
        break
      case 'Button':
        sideBar = 'buttonEditorVue'
        break
      case 'Social':
        sideBar = 'socialEditorVue'
        break
      case 'Spacer':
        sideBar = 'spacerEditorVue'
        break
      default:
        break
    }
    state.currentSideBar.name = sideBar
    state.currentSideBar.outerIndex = outerIndex
    state.currentSideBar.innerIndex = innerIndex

    state.content = 'content'
  },
  ReplaceElement(state, payload) {
    const { type, outerIndex, innerIndex, others } = payload

    state.column[outerIndex || 0].list.splice(innerIndex, 1, {
      type,
      ...others,
      id: Math.random(),
    })
  },
  editComponent(state, payload) {
    const { outerIndex, property } = payload
    state.column[outerIndex].properties = JSON.parse(JSON.stringify(property))
  },
  editElement(state, payload) {
    console.log(payload)
    // json.parse json.stringify chanages it to a new object and removes all the previos xtis
    const a = state.column[payload.outterIndex].list

    a[payload.innerIndex] = JSON.parse(JSON.stringify(payload.property))

    state.column[payload.outterIndex].list = JSON.parse(JSON.stringify(a))
  },
  addIcon(state, payload) {
    const { outerIndex, innerIndex, icon } = payload
    state.column[outerIndex].list[innerIndex].icons.push({
      icon: icon.icon,
      link: '',
    })
  },
  deleteIcon(state, payload) {
    const { outerIndex, innerIndex, index } = payload

    const a = state.column[outerIndex].list
    a[innerIndex].icons.splice(index, 1)

    state.column[outerIndex].list = a
  },
  deleteElement(state, payload) {
    state.elements = true
    state.currentSideBar.name = undefined
    state.currentSideBar.outerIndex = null
    state.currentSideBar.innerIndex = null

    const element = state.column[payload.outerIndex]
    element.list.splice(payload.innerIndex, 1, {})
    console.log(
      element.list[payload.innerIndex],
      '::::::::::::::::::::::::::::::'
    )

    state.column[payload.outerIndex] = element
  },
  deleteSection(state, payload) {
    if (state.column.length === 1) {
      return
    }
    state.elements = 'section'
    const section = state.column
    section.splice(payload.outerIndex, 1)
  },
  duplicateSection(state, payload) {
    const section = state.column[payload.outerIndex]
    state.column.splice(payload.outerIndex + 1, 0, { ...section })
  },
  duplicateColumn(state, payload) {
    const column = state.column[payload.outerIndex].list[payload.innerIndex]
    if (state.column[payload.outerIndex].list.length >= 4) {
      // return
    } else {
      state.column[payload.outerIndex].list.splice(payload.innerIndex + 1, 0, {
        ...column,
      })
    }
  },
}
