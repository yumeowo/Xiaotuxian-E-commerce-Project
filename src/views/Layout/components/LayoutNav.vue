<script setup>

</script>

<template>
  <nav class="app-nav">
    <ul>
      <template v-if="true">
        <li><a href="javascipt:;"><i class="iconfont icon-user"></i>悠梦</a></li>
        <li>
          <el-popconfirm title="真的要退出吗QAQ" confirm-button-text="确认" cancel-button-text="取消">
            <template #reference>
              <a href="javascipt:;">退出登录</a>
            </template>
          </el-popconfirm>
        </li>
        <li><a href="javascipt:;">我的订单</a></li>
        <li><a href="javascipt:;">会员中心</a></li>
      </template>
      <template v-else>
        <li><a href="javascipt:;">请先登录</a></li>
        <li><a href="javascipt:;">帮助中心</a></li>
        <li><a href="javascipt:;">关于我们</a></li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  background: #333;
}

.app-nav ul {
  display: flex;
  height: 53px;
  justify-content: flex-end;
  align-items: center;
}

.app-nav li{
  &:hover {
    color: $xtxColor;
  }

  ~li {
    a {
      border-left: 2px solid #666;
    }
  }
}

.app-nav li a {
  padding: 0 15px;
  color: #cdcdcd;
  line-height: 1;
  display: inline-block;
}
</style>