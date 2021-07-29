<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg t="1627445062169" class="privateImage-svg left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3650" width="200" height="200"><path d="M959.68 921.024c-15.232-181.696-139.648-331.968-307.84-386.624 70.464-45.632 117.248-124.48 117.248-214.464C769.152 178.624 654.208 64 512.512 64 370.752 64 255.808 178.624 255.808 319.936c0 89.984 46.784 168.832 117.248 214.528-168.192 54.592-292.544 204.864-307.84 386.56-0.192 3.456-0.64 5.44 0 10.176C66.496 947.2 80.64 960 96.704 960c17.92 0 32.064-14.656 32.064-32 16.704-197.76 182.272-351.936 383.744-351.936 201.408 0 366.976 154.176 383.68 351.936 0 17.344 14.144 32 32.064 32 16.064 0 30.208-12.8 31.424-28.8C960.32 926.464 959.936 924.416 959.68 921.024zM320 319.936C320 213.952 406.208 128 512.512 128s192.448 85.952 192.448 191.936c0 106.048-86.144 192-192.448 192S320 425.984 320 319.936z" p-id="3651" fill="#8a8a8a"></path></svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg t="1627445358059" class="icon-mobile" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4562" width="200" height="200"><path d="M512.387 779.93c-24.834 0-45.039 20.201-45.039 45.041 0 24.834 20.205 45.036 45.039 45.036 24.838 0 45.043-20.202 45.043-45.036C557.43 800.131 537.225 779.93 512.387 779.93L512.387 779.93zM512.387 779.93" p-id="4563" fill="#ffffff"></path><path d="M735.214 71 289.563 71c-37.495 0-67.994 30.501-67.994 67.995l0 747.902c0 37.494 30.5 67.994 67.994 67.994l445.651 0c37.494 0 67.994-30.5 67.994-67.994L803.208 138.995C803.208 101.501 772.708 71 735.214 71L735.214 71zM289.563 116.328l445.651 0c12.5 0 22.667 10.167 22.667 22.667l0 560.323L266.897 699.318 266.897 138.995C266.897 126.495 277.063 116.328 289.563 116.328L289.563 116.328zM735.214 909.561 289.563 909.561c-12.5 0-22.666-10.169-22.666-22.664L266.897 748.525l490.983 0 0 138.371C757.881 899.396 747.714 909.561 735.214 909.561L735.214 909.561zM735.214 909.561" p-id="4564" fill="#ffffff"></path></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "User_massage"
  }
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 20px;
    margin-top: 43px;
  }

  #user-info .privateImage-svg {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    padding:5px;
    box-sizing: border-box;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 15px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 20px;
    height: 20px;
    left: -20px;
    top: 0px;
  }
</style>
