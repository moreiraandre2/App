import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button, Text, ListView, ActivityIndicator, Modal} from 'react-native';
 
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
 
// Creating Login Activity.
class LoginActivity extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'Login',
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
fetch('https://amazingsuporte.000webhostapp.com/teste/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Acesso Liberado')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>Login </Text>
  
        <TextInput
          
          placeholder="Entre com Email"
 
          onChangeText={(UserEmail) => this.setState({UserEmail})}
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          placeholder="Entre com a Senha"
 
          onChangeText={(UserPassword) => this.setState({UserPassword})}
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Entrar" onPress={this.UserLoginFunction} color="#00BCD4" />
  
        <Text style={styles.TextReg} onPress={() =>navigate('Third')} >Registre - se</Text>
  
</View>

            
    );
  }
}
 
// Creating Profile activity.
class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'Inicio',
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
     const { navigate } = this.props.navigation;
 
      return(
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> Controle de Fichas </Text>
            <Button  title="Criar Ficha" onPress={() =>navigate('Four')} color="#00BCD4" />
            <Button  title="Ver Fichas"  onPress={() =>navigate('Five')} color="#00BCD4"/>
            <Button title="Sair" onPress={ () => goBack(null) } color="#00BCD4"/>
 
         </View>
      );
   }
}



class RegisterActivity extends Component {

  static navigationOptions =
   {
      title: 'Registro',
    
   };
    

  constructor(props){
    super(props)
    this.state = {
      UserName: '',
      UserEmail: '',
      UsePassword: ''
    }
  }

UserRegistrationFunc = () => {
    const {UserName} = this.state;
    const {UserEmail} = this.state;
    const {UserPassword} = this.state;

    fetch('https://amazingsuporte.000webhostapp.com/teste/registration.php', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name: UserName,
        email: UserEmail,
        password: UserPassword
      })
    }).then((response) => response.json())
    .then((responseJson) => {
        Alert.alert(responseJson);
        this.props.navigation.navigate('First');
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15}}>
          Registro de Usuário
        </Text>
        <TextInput 
          placeholder= "Nome Completo"
          onChangeText={(UserName) => this.setState({UserName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "E-Mail"
          onChangeText={(UserEmail) => this.setState({UserEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Senha"
          onChangeText={(UserPassword) => this.setState({UserPassword})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
        <Button title="Registrar - se" onPress={this.UserRegistrationFunc} color="#00BCD4" />
      </View>
    );
  }
}
 
class AddActivity extends Component {

  static navigationOptions =
   {
      title: 'Adicionar Ficha',
    
   };
    

  constructor(props){
    super(props)
    this.state = {
      ClientName: '',
      ClientEmail: '',
      ClientTel: '',
      ClientRua:'',
      CLientBairro:'',
      ClientNum:'',
      ClientCidade:'',
      ClientEstado:'',
    }
  }

UserRegistrationFunc = () => {
    const {ClientName} = this.state;
    const {ClientEmail} = this.state;
    const {ClientTel} = this.state;
    const {ClientRua} = this.state;
    const {ClientBairro} = this.state;
    const {ClientNum} = this.state;
    const {ClientCidade} = this.state;
    const {ClientEstado} = this.state;

    fetch('https://amazingsuporte.000webhostapp.com/teste/ClienteAdd.php', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name: ClientName,
        email: ClientEmail,
        tel: ClientTel,
        rua: ClientRua,
        bairro: ClientBairro,
        num: ClientNum,
        cidade: ClientCidade,
        estado: ClientEstado
      })
    }).then((response) => response.json())
    .then((responseJson) => {
        Alert.alert(responseJson);
        this.props.navigation.navigate('Second');
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style = {{fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15}}>
          Criar Ficha
        </Text>
        <TextInput 
          placeholder= "Nome Completo"
          onChangeText={(ClientName) => this.setState({ClientName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "E-Mail"
          onChangeText={(ClientEmail) => this.setState({ClientEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Telefone"
          onChangeText={(ClientTel) => this.setState({ClientTel})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Rua"
          onChangeText={(ClientRua) => this.setState({ClientRua})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Bairro"
          onChangeText={(ClientBairro) => this.setState({ClientBairro})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Numero"
          onChangeText={(ClientNum) => this.setState({ClientNum})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Cidade"
          onChangeText={(ClientCidade) => this.setState({ClientCidade})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput 
          placeholder= "Estado"
          onChangeText={(ClientEstado) => this.setState({ClientEstado})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <Button title="Criar" onPress={this.UserRegistrationFunc} color="#00BCD4" />
      </View>
    );
  }
}

class ListActivity extends Component{

  static navigationOptions =
   {
      title: 'Lista de Fichas',
    
   };

  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }
  GetItem(name){
    Alert.alert(name);
  }

  OpenItensActivity(id){
    //Alert.alert(id);
    this.props.navigation.navigate('Six', {ListViewClickItemHolder: id});
  }

  componentDidMount(){
    fetch('https://amazingsuporte.000webhostapp.com/teste/ListFichas.php')
    .then((response) => response.json())
    .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function(){
        });
    }).catch((error) => {
      console.error(error);
    });
  }

  ListViewItemSeparator = () => {
    return(
      <View
        style = {{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render()
  {
    const { navigate } = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return(
      <View syle={styles.MainContainer}>
      
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={(rowData) => <Text style={styles.rowViewContainer}
          onPress={this.OpenItensActivity.bind(this, rowData.id)}>{rowData.id} - {rowData.name}</Text>}
        /> 
      </View>
    );
  }
}

class ItensActivity extends Component{
  static navigationOptions =
   {
      title: 'Itens da Ficha',
    
   };
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      ModalVisibleStatus: false,
      ItemDesc:'',
      ItemValor:'',
      ItemQtd:'',
      noResult:'',
      TextHolderName:'',
      TextHolderPreco:''
    }
  }
  
  ShowModalFunction(visible, idRowName, idRowPreco) {
 
    this.setState({
      ModalVisibleStatus: visible,
      TextHolderName: idRowName,
      TextHolderPreco: idRowPreco
    });
    
  }

  OpenAddItensActivity(){
    this.props.navigation.navigate('Seven', {ListViewClickItemHolder: this.props.navigation.state.params.ListViewClickItemHolder});
  }

  componentDidMount(){
    fetch('https://amazingsuporte.000webhostapp.com/teste/ItensFichas.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.navigation.state.params.ListViewClickItemHolder
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson === 0)
        {
          noResult: 0;
          //Then open Profile activity and send user email to profile activity.
          //this.props.navigation.navigate('Second');
        }
          else{
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function(){

          });
        }
    }).catch((error) => {
      console.error(error);
    });
  }

  ItemRegistrationFunc = () => {
    const {ItemDesc} = this.state;
    const {ItemValor} = this.state;
    const {ItemQtd} = this.state;
        
    fetch('https://amazingsuporte.000webhostapp.com/teste/ItensAdd.php', {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        idFicha: this.props.navigation.state.params.ListViewClickItemHolder,
        nameItem: ItemDesc,
        qtd: ItemQtd,
        preco: ItemValor,
      })
    }).then((response) => response.json())
    .then((responseJson) => {
        this.componentDidMount();
        this.setState({
          ItemValor:'',
          ItemDesc:'',
          ItemQtd:''
        });
    }).catch((error) => {
      console.error(error);
    });
   
  }

  ListViewItemSeparator = () => {
    return(
      <View
        style = {{
          height: .5,
          width: "100%",
          backgroundColor: "#011",
        }}
      />
    );
  }
  
  render(){
    if(this.state.isLoading == true){
      return(
        <View style={styles.MainContainer}>
        
          <View >
            <TextInput 
              placeholder= "Descrição Item"
               onChangeText={(ItemDesc) => this.setState({ItemDesc})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput 
              placeholder= "Quantidade Item"
               onChangeText={(ItemQtd) => this.setState({ItemQtd})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput 
              placeholder= "Valor Item"
               onChangeText={(ItemValor) => this.setState({ItemValor})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <Button title="Adicionar Item" onPress={this.ItemRegistrationFunc.bind(this)} color="#00BCD4" />
          </View> 
          <View>
            <Text style = {{fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15}}>
              Nenhum Item cadastrado!
            </Text>
          </View>
        </View> 
      );
    }else{
      return(
        <View style={styles.MainContainer}>
        
          <View>
            <TextInput 
              placeholder= "Descrição Item"
               onChangeText={(ItemDesc) => this.setState({ItemDesc})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput 
              placeholder= "Quantidade Item"
               onChangeText={(ItemQtd) => this.setState({ItemQtd})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <TextInput 
              placeholder= "Valor Item"
               onChangeText={(ItemValor) => this.setState({ItemValor})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
            <Button title="Adicionar Item" onPress={this.ItemRegistrationFunc.bind(this)} color="#00BCD4" />
            <Modal
                transparent={true}
                animationType={"slide"}
                visible={this.state.ModalVisibleStatus}
                onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
       
                  <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
       
                      <View style={styles.ModalInsideView}>
                          {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
                          
                          <Text style={styles.TextStyle}>Descrição: {this.state.TextHolderName} R$ {this.state.TextHolderPreco}</Text>
       
                          <Button  title="Pago" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
                          <Text></Text>
                          <Button  title="Deletar" onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } />
       
                          {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
       
                      </View>
                  </View>
              </Modal>
          </View>   
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={(rowData) => 
              <Text style={styles.rowViewContainer} onPress={() => { this.ShowModalFunction(true, rowData.nameItem, rowData.preco) }}>
                {rowData.id} - {rowData.nameItem} - R$ {rowData.preco}</Text>}
          /> 
        </View>
      );
    }
  }
}



export default MainProject = StackNavigator(
{
   First: { screen: LoginActivity },
   
   Second: { screen: ProfileActivity },

   Third: { screen: RegisterActivity },

   Four: { screen: AddActivity },

   Five: { screen: ListActivity },

   Six: { screen: ItensActivity },

 
});
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
backgroundColor : "#fff"
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderBottomWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#000000',
 
 
},

TextInputLtStyleClass: {
 
marginBottom: 7,
height: 40,
borderBottomWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 
},
 

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 },

 rowViewContainer: {
  fontSize: 20,
  paddingRight: 10,
  paddingTop: 10,
  backgroundColor: '#fff',
  paddingBottom: 10,
 },

 PgButton: {
  color: "#000",
  textAlign: 'center',
  borderWidth: 2,
  borderColor: '#ff0000',
 },
ModalInsideView:{
 
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor : "#00BCD4", 
  height: 300 ,
  width: '90%',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fff'
 
},
 
TextStyle:{
 
  fontSize: 20, 
  marginBottom: 20, 
  color: "#fff",
  padding: 20,
  textAlign: 'center'
 
},

TextReg:{
 
  fontSize: 20, 
  marginBottom: 20, 
  color: "#000",
  padding: 20,
  textAlign: 'center'
 
}
});

