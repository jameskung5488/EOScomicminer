import Vue from 'vue';
import Router from 'vue-router';
import ItemView from '@/views/ItemView';
import ListView from '@/views/ListView';
import LoginView from '@/views/LoginView';
import FaqView from '@/views/FaqView';
import UserView from '@/views/UserView';
import TermView from '@/views/TermView';
import PrivacyView from '@/views/PrivacyView';
import BirthdayGiftView from '@/views/BirthdayGiftView';
import InviteVie from '@/views/InviteView';
import RankingList from '@/views/RankingList';
Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: ListView,
    },
    {
      name: 'Login',
      path: '/Login',
      component: LoginView,
    },

    {
      name: 'Item',
      path: '/item/:id(\\d+)',
      component: ItemView,
    },
    {
      name: 'User',
      path: '/user/:address',
      component: UserView,
    },
    {
      name: 'FAQ',
      path: '/faq',
      component: FaqView,
    },
    {
      name: 'Privacy',
      path: '/privacy-policy',
      component: PrivacyView,
    },
    {
      name: 'Term',
      path: '/terms-of-us',
      component: TermView,
    },
    {
      name: 'BirthdayGift',
      path: '/birthday-gift',
      component: BirthdayGiftView,
    },    
    {
      name: 'InviteVie',
      path: '/InviteVie',
      component: InviteVie,
    },  
    {
      name: 'RankingList',
      path: '/RankingList',
      component: RankingList,
    },  
  ],
});
