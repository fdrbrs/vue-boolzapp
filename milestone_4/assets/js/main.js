const app = new Vue ({
    el: '#app',
    data: {
        newMsg: '',
        timeStamp: '',
        activeUser: 0,
        searchInput: '',
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Leonardo',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '01/01/2021 00:30:22',
                        text: 'Buon Anno!',
                        status: 'sent'
                    },
                    {
                        date: '01/01/2021 00:41:33',
                        text: 'Grazie, anche a te!',
                        status: 'received'
                    },
                    {
                        date: '01/01/2021 00:42:12',
                        text: 'ma chi sei?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Miriam',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '02/04/2020 11:30:10',
                        text: 'Pasta o riso?',
                        status: 'received'
                    },
                    {
                        date: '02/04/2021 12:11:13',
                        text: 'Dipende.',
                        status: 'sent'
                    },
                    {
                        date: '01/01/2021 12:33:06',
                        text: 'e pasta sia.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Andrea',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '03/02/2020 17:03:11',
                        text: 'Messaggio di prova, non rispondere',
                        status: 'sent'
                    },
                    {
                        date: '03/02/2020 19:12:12',
                        text: 'Ehi',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Simone',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '21/03/2020 12:10:40',
                        text: 'Ho la barba.',
                        status: 'received'
                    },
                    {
                        date: '22/03/2020 15:31:22',
                        text: 'Evviva.',
                        status: 'sent'
                    }
                ],
            },
        ]
    },
    methods: {
        changeActiveUser(index){
            this.activeUser = index
        },
        ok(){
            this.contacts[this.activeUser].messages.push({text: 'ok', status: 'received', date: dayjs().format("DD/MM/YYYY HH:MM:ss")});
        },
        sendText(){
            this.contacts[this.activeUser].messages.push({text: this.newMsg, status: 'sent', date: dayjs().format("DD/MM/YYYY HH:MM:ss")});
            this.newMsg = '';
            setTimeout(this.ok,1000)

        },
        searchContact(){
            for (let i = 0; i < this.contacts.length ; i++) {
                if (this.contacts[i].name.toLowerCase().search(this.searchInput) === -1) {
                    this.contacts[i].visible = false
                } else {
                    this.contacts[i].visible = true
                }
                console.log(this.contacts[i].name, this.contacts[i].visible);
            }

            
        },
        options(){
            console.log('click');
        }
        
    }
})