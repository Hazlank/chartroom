<template>
  <transition name='sidebar'>
    <div class="tg-side-bar"  v-if="barPosition" @click="barDisply">
      <div class="tg-sidebar">
        <div class="tg-sidebar__infor">
          <div class="tg-sidebar__avatar">
            <img :src='avatar' alt="头像">
          </div>
          <div class="tg-sidebar__item">
            <span class="tg-sidebar__name">{{userinfo.username}}</span>
            <span class="tg-sidebar__phone">{{userinfo.userphone | filterPhone}} <i class="iconfont icon-bookmarkwhite"></i></span>
          </div>
        </div>
        <ul class="tg-sidebar-toolsList">
          <li class="tg-sidebar-toolsList__memu tg-icon" v-for="(data, index) in memus" :key="index" @click="stopPropagation(index,$event,data)">
            <i class="iconfont" :class="data.icon"></i>
            <a>{{data.context}}</a>
            <div class="theme-buttonContain"  v-if="data.icon === 'icon-yueliang'">
              <div class="theme-button">
                <div class="theme-button__container button-position">
                  <a class="t-light"></a>
                  <a class="t-dark"></a>
                </div>
              </div>
              <a class="theme-change">
              </a>
            </div>
          </li>
        </ul>
      </div>
   </div>
  </transition>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'Vuex'
  export default {
    name: 'sidebar',
    data () {
      return {
        avatar: './static/img/7753609_p0.jpg',
        userinfo: {
          username: 'hazlank',
          userphone: '13265846123'
        },
        memus: [{
          context: 'New Group',
          type: 'Group',
          icon: 'icon-qunliao'
        }, {
          context: 'New Channel',
          type: 'Channel',
          icon: 'icon-guangbo'
        }, {
          context: 'Contacts',
          type: 'Contact',
          icon: 'icon-lianxiren'
        }, {
          context: 'Calls',
          type: 'Call',
          icon: 'icon-dianhua'
        }, {
          context: 'Settings',
          type: 'Setting',
          icon: 'icon-shezhi'
        }, {
          context: 'Night Mode',
          icon: 'icon-yueliang'
        }]
      }
    },
    methods: {
      ...mapActions(['barDisply', 'themeChange', 'boxDisplay', 'boxType']),
      stopPropagation (index, e, data) {
        if (index === 5) {
          e.stopPropagation()
          this.themeChange()
          this.ButtonType = this.ButtonType === 'button-light' ? 'button-dark' : 'button-light'
        } else {
          this.boxDisplay()
          this.boxType(`Box${data.type}`)
        }
      }
    },
    filters: {
      filterPhone: function (value) {
        return `+86 ${value.replace(/\B(?=(?:\d{4})+$)/g, ' ')}`
      }
    },
    computed: {
      ...mapGetters(['barPosition'])
    }
  }
</script>
