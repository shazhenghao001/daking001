const lyTop = {
    template: "\
    <div class='nav-top'> \
     <shortcut/>\
        <!--头部--> \
        <div class='header' id='headApp'> \
            <div class='py-container'> \
                <div class='yui3-g Logo'> \
                    <div class='yui3-u Left logoArea'> \
                        <a class='logo-bd' title='大金' href='index.html' target='_blank'></a> \
                    </div> \
                    <div class='yui3-u Center searchArea'> \
                        <div class='search'> \
                            <form action='' class='sui-form form-inline'> \
                                <!--searchAutoComplete--> \
                                <div class='input-append'> \
                                    <input type='text' id='autocomplete' v-model='key' \
                                           class='input-error input-xxlarge'/> \
                                    <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button> \
                                </div> \
                            </form> \
                        </div> \
                        <div class='hotwords'> \
                            <ul> \
                            </ul> \
                        </div> \
                    </div> \
                    <div class='yui3-u Right shopArea'> \
                        <div class='fr shopcar'> \
                            <div class='show-shopcar' id='shopcar'> \
                                <span class='car'></span> \
                                <a class='sui-btn btn-default btn-xlarge' href='cart.html' target='_blank'> \
                                    <span>我的购物车</span> \
                                    <i class='shopnum'>0</i> \
                                </a> \
                                <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'> \
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> \
                                </div> \
                            </div> \
                        </div> \
                    </div> \
                </div> \
                <div class='yui3-g NavList'> \
                    <div class='yui3-u Center navArea'> \
                        <ul class='nav'> \
                            <li class='f-item yui3-u Left all-sort'><a href='../../leyou-portal/daking/.html'>首页</a></li> \
                            <li class='f-item'><a href='https://www.daikin-china.com.cn/?hmsr=baidu&hmpl=pcbz&hmcu=0528&hmkw=Title'>大金商城</a></li> \
                            <li class='f-item'><a href='../../leyou-portal/daking/shouhou.html'>售后</a></li> \
                            <li class='f-item'><a href='../../leyou-portal/daking/zixun.html'>咨询</a></li> \
                            <li class='f-item'><a href='../../leyou-portal/daking/yuding.html'>预定</a></li> \
                            <li class='f-item'><a href='../../leyou-portal/daking/templat.html'>联系我们</a></li> \
<!--                            <li class='f-item'><a href='seckill-index.html' target='_blank'>秒杀</a></li> \
-->                        </ul> \
                    </div> \
                    <div class='yui3-u Right'></div> \
                </div> \
            </div> \
        </div>\
       </div> \
      ",
    name:'ly-top',
    data() {
        return {
            key: "",
            query: location.search
        }
    },
    methods: {
        search() {
            window.location = 'search.html?key=' + this.key;
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return decodeURI(r[2]);
            }
            return null;
        }
    },
    created() {
        this.key = this.getUrlParam("key");
    },
    components: {
        shortcut:() => import('./shortcut.js')
    }
}
export default lyTop;