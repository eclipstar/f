import React from 'react'
import { Dimensions, Modal, StyleSheet, View } from 'react-native'

interface ModalProps {
  isVisible: boolean
  onClose: () => void
  children: any
}

const GenericModalComponent: React.FC<ModalProps> = ({ isVisible, onClose, children }) => (
  <Modal animationType='fade' transparent={true} visible={isVisible} onRequestClose={onClose}>
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>{children}</View>
    </View>
  </Modal>
)

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: '#FDE8F3',
    borderRadius: 48,
    alignItems: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: -10
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A74AB5'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A154B',
    marginBottom: 20,
    textAlign: 'center'
  },
  emotionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  description: {
    fontSize: 14,
    color: '#4A154B',
    textAlign: 'center',
    marginTop: 10
  }
})

export default GenericModalComponent
