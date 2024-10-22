/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu as M } from 'react-native-paper';

interface Props {
    label: string,
    items: {title: string; value: any}[],
    selectItemEvent: any
}

const Menu = ({
    label,
    items,
    selectItemEvent,
}: Props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
      <View
        style={styles.container}>
        <M
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button contentStyle={{backgroundColor:'#BBA9FF36', width:'100%'}} onPress={openMenu}>{label}</Button>}>
            {
                items?.map(el => (
                    <M.Item onPress={selectItemEvent} key={el.value} title={el.title} />
                ))
            }
        </M>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width:'100%'
      }
})

export default Menu;