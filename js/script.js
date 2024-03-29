console.log('Vue ready', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
  currentChat: 0,
  newMessage: "",
  filter: "",
  user:{
    name: 'Resmini Loris',
    avatar: '_io',
  },
  contacts: [
    {
      name: 'Michele',
      avatar: '_1',
      visible: true,
      messages: [
        {
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent',
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent',
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received',
        },
      ],
    },
    {
      name: 'Fabio',
      avatar: '_2',
      visible: true,
      messages: [
        {
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent',
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received',
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received',
        },
      ],
    },
    {
      name: 'Samuele',
      avatar: '_3',
      visible: true,
      messages: [
        {
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received',
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent',
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received',
        },
      ],
    },
    {
      name: 'Luisa',
      avatar: '_4',
      visible: true,
      messages: [
        {
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent',
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received',
        },
      ],
    },
  ],
  },
  methods: {
    //cambio chat al click sul contatto
    goToCurrentChat(index){
      this.currentChat = index;
    },
    //stampo nuovo messaggio (user)
    submitMessage(){
    newText = {
      date: '10/01/2020 16:15:22',
      message: this.newMessage,
      status: 'sent',
    } 
    
      this.contacts[this.currentChat].messages.push(newText);
      this.newMessage="";

      setTimeout(()=>{
        const answerText = {
          status: 'received',
          message: 'ok',
          date: '10/01/2020 16:15:22',
        }
      this.contacts[this.currentChat].messages.push(answerText);
      },1000)
    },
    
  

    isVisible(filtraggio){
      var result = false;

      if (this.filter.trim() == '')
          result = true;
      else {
          result = filtraggio.includes(this.filter.trim());
      }    

      return result;
  },
  },
});

