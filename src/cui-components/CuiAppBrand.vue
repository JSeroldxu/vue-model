<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">App brand</h3>

    <h4 class="ui-block-heading">Example</h4>

    <div class="cui-example">
      <div class="ui-bordered p-4 mb-4">
        <div class="app-brand">
          <a href="javascript:void(0)" class="app-brand-text text-dark text-big">Brand</a>
        </div>
      </div>

      <div class="ui-bordered p-4">
        <div class="app-brand">
          <img src="/static/img/logo.png" alt="" class="app-brand-logo ui-w-40">
          <a href="javascript:void(0)" class="app-brand-text text-dark text-big ml-2">Brand</a>
        </div>
      </div>
    </div>

    <h4 class="ui-block-heading">Within navbar</h4>

    <div class="cui-example">
      <b-navbar toggleable="lg" variant="light">
        <!-- Brand -->
        <b-navbar-brand href="javascript:void(0)" class="app-brand">
          <img src="/static/img/logo.png" alt="" class="app-brand-logo ui-w-40">
          <span class="app-brand-text ml-2">Brand</span>
        </b-navbar-brand>
        <!-- / Brand -->

        <b-navbar-toggle target="navbar-app-brand"></b-navbar-toggle>

        <b-collapse is-nav id="navbar-app-brand">
          <b-navbar-nav class="mr-auto">
            <b-nav-item href="javascript:void(0)" active>Home</b-nav-item>
            <b-nav-item href="javascript:void(0)">Features</b-nav-item>
            <b-nav-item href="javascript:void(0)">Pricing</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <h4 class="ui-block-heading">Within sidenav</h4>

    <div class="cui-example">
      <div>
        <button type="button" class="btn btn-primary mb-4" @click="isSidenavCollapsed = !isSidenavCollapsed">Toggle collapsed</button>
      </div>

      <!-- Simple text -->

      <sidenav class="d-inline-flex bg-light align-top mr-4 mb-4" style="height: 400px" :class="{ 'sidenav-collapsed': isSidenavCollapsed }">
        <!-- Brand -->
        <div class="app-brand py-3">
          <a href="javascript:void(0)" class="app-brand-text sidenav-text text-big">Brand</a>
        </div>
        <div class="sidenav-divider my-0"></div>
        <!-- / Brand -->

        <div class="sidenav-inner py-3">
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-notifications-outline">Item 1</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-settings">Item 2</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-paper">Item 3</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-flask">Item 4</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-basketball">Item 5</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-bonfire">Item 6</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cafe">Item 7</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cloud-outline">Item 8</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-code">Item 9</sidenav-link>
        </div>
      </sidenav>

      <!-- With logo -->

      <sidenav class="d-inline-flex bg-light align-top mr-4 mb-4" style="height: 400px" :class="{ 'sidenav-collapsed': isSidenavCollapsed }">
        <!-- Brand -->
        <div class="app-brand py-3">
          <img src="/static/img/logo.png" alt="" class="app-brand-logo ui-w-40">
          <a href="javascript:void(0)" class="app-brand-text sidenav-text text-big ml-2">
            Brand<br>
            <span class="text-tiny font-weight-semibold opacity-25">ADMIN AREA</span>
          </a>
        </div>
        <div class="sidenav-divider my-0"></div>
        <!-- / Brand -->

        <div class="sidenav-inner py-3">
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-notifications-outline">Item 1</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-settings">Item 2</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-paper">Item 3</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-flask">Item 4</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-basketball">Item 5</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-bonfire">Item 6</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cafe">Item 7</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cloud-outline">Item 8</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-code">Item 9</sidenav-link>
        </div>
      </sidenav>

      <!-- With layout sidenav toggle -->

      <sidenav class="d-inline-flex bg-light align-top mr-4 mb-4" style="height: 400px" :class="{ 'sidenav-collapsed': isSidenavCollapsed }">
        <!-- Brand -->
        <div class="app-brand py-3">
          <img src="/static/img/logo.png" alt="" class="app-brand-logo ui-w-40">
          <a href="javascript:void(0)" class="app-brand-text sidenav-text text-big ml-2">Brand</a>
          <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
            <i class="ion ion-md-menu align-middle"></i>
          </a>
        </div>
        <div class="sidenav-divider my-0"></div>
        <!-- / Brand -->

        <div class="sidenav-inner py-3">
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-notifications-outline">Item 1</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-settings">Item 2</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-paper">Item 3</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-flask">Item 4</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-basketball">Item 5</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-bonfire">Item 6</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cafe">Item 7</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-ios-cloud-outline">Item 8</sidenav-link>
          <sidenav-link href="javascript:void(0)" icon="ion ion-md-code">Item 9</sidenav-link>
        </div>
      </sidenav>
    </div>

  </div>
</template>

<script>
import { Sidenav, SidenavLink } from '@/vendor/libs/sidenav'

export default {
  components: {
    Sidenav,
    SidenavLink
  },
  data: () => ({
    isSidenavCollapsed: false
  })
}
</script>
