import VueRouter from 'vue-router'

import AggregatedPurchaseContainer from './components/AggregatedPurchaseContainer.vue'
import ButlerContainer from './components/ButlerContainer.vue'
import CompetitivenessContainer from './components/CompetitivenessContainer.vue'
import EmbodimentContainer from './components/EmbodimentContainer.vue'
import HomeContainer from './components/HomeContainer.vue'
import InteractionsContainer from './components/InteractionsContainer.vue'
import NodesContainer from './components/NodesContainer.vue'
import PackageServicesContainer from './components/PackageServicesContainer.vue'
import ProcessContainer from './components/ProcessContainer.vue'
import SAASContainer from './components/SAASContainer.vue'
import ServiceContainer from './components/ServiceContainer.vue'
import SupermarketContainer from './components/SupermarketContainer.vue'

var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/embodiment', component: EmbodimentContainer},
    {path: '/aggregatedpurchase', component: AggregatedPurchaseContainer},
    {path: '/butler', component: ButlerContainer},
    {path: '/competitiveness', component: CompetitivenessContainer},
    {path: '/interactions', component: InteractionsContainer},
    {path: '/nodes', component: NodesContainer},
    {path: '/packageservices', component: PackageServicesContainer},
    {path: '/process', component: ProcessContainer},
    {path: '/saas', component: SAASContainer},
    {path: '/service', component: ServiceContainer},
    {path: '/supermarket', component: SupermarketContainer}
  ]
})

export default router