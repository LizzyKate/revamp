const column = {
  name: 'column',
  backgroundColor: '',
  backgroundImage: '',
  width: 100,
  padding: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  borderRadius: {
    topRight: 15,
    topLeft: 15,
    bottomRight: 15,
    botomLeft: 15,
  },
  borderWidth: {
    right: 1,
    left: 1,
    top: 1,
    bottom: 1,
  },
  borderStyle: {
    style: [
      'solid',
      'dashed',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
      'none',
      'hidden',
    ],
  },
  borderColor: '',
}

export default [
  {
    name: 'Container',
    width: 100,
    backgroundColor: '',
    backgroundImage: '',
    padding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
    },
    borderRadius: {
      topRight: 0,
      topLeft: 0,
      bottomRight: 0,
      bottomLeft: 0,
    },
    borderWidth: 1,

    borderColor: '#F2C94C',
  },

  {
    name: 'Row',
    smallContainer: [column, column],
  },
  {
    name: 'Row',
    smallContainer: [column, column, column],
  },
  {
    name: 'Row',
    smallContainer: [column, column, column, column],
  },
]
