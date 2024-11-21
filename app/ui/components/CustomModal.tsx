import React from 'react'
import { Dimensions, Modal, Pressable, StyleSheet, View } from 'react-native'

import CloseIcon from '../../assets/icons/close.svg'
import DislikeOutlined from '../../assets/icons/dislikeOutlined.svg'
import FillHeart from '../../assets/icons/fillHeart.svg'
import LikeOutlined from '../../assets/icons/likeOutlined.svg'

interface Props {
  visible: boolean
  children: any
  onClose: Function
}

const dimensions = Dimensions.get('screen')
function CustomModal({ visible, children, onClose }: Props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        visible={visible}
        transparent
        onRequestClose={() => {
          onClose()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
            {/* <View style={styles.container}>
              <LikeOutlined width={40} height={40} />
              <DislikeOutlined width={40} height={40} />
              <FillHeart width={40} height={40} />
            </View> */}
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => onClose()}>
              <CloseIcon width={20} height={20} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingBottom: 70
  },
  modalView: {
    position: 'relative',
    height: dimensions.height * 0.29,
    width: dimensions.width * 0.95,
    margin: 20,
    backgroundColor: '#dcd8eb',
    borderRadius: 8,
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 50,
    padding: 13,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default CustomModal
