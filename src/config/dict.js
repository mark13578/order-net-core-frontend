import store from '@/store'

export default {
  sexType: [
    { id: 0, name: '未知', enName: 'Unknown', TwName: '未知' },
    { id: 1, name: '男', enName: 'Male', TwName: '男' },
    { id: 2, name: '女', enName: 'Female', TwName: '女' }
  ],
  userType: [
    { id: 1, name: '租户用户', enName: 'Tenant user', TwName: '租戶用戶' },
    { id: 2, name: '平台用户', enName: 'Platform user', TwName: '平臺用戶' }
  ],
  uiMenuType: [
    { id: 0, name: '一级菜单', enName: 'Level 1 menu', TwName: '一級菜單' },
    { id: 1, name: '子菜单', enName: 'Sub menu', TwName: '子菜單' },
    { id: 2, name: '权限', enName: 'Permissions', TwName: '權限' }
  ],
  RoleAccessType: [
    { id: 1, name: '公开的', enName: 'Public', TwName: '公開的' },
    { id: 2, name: '管理员用户可访问', enName: 'The administrator can access it', TwName: '管理員用戶可訪問' },
    { id: 3, name: '按授权编码分配', enName: 'Assigned by authorization code', TwName: '按授權編碼分配' }
  ],
  DatabaseProviderType: [
    { id: 1, name: 'EntityFrameworkCore', enName: 'EntityFrameworkCore', TwName: 'EntityFrameworkCore' },
    { id: 2, name: 'MongoDb', enName: 'MongoDb', TwName: 'MongoDb' }
  ],
  Language: [
    { id: 'zhTw', name: '繁體中文', enName: 'Traditional Chinese' },
    { id: 'zh', name: '简体中文', enName: 'Simplified Chinese' },
    { id: 'en', name: '英文', enName: 'English' }
  ],
  EntryType: [
    { id: 'Tenant', name: '租户', enName: 'Tenant', TwName: '租戶' },
    { id: 'Host', name: '管理后台', enName: 'Management', TwName: '管理後臺' }
  ],
  getNameById: function(dict, valueId) {
    var vals = dict.filter(f => f.id === valueId)
    if (vals.length > 0) {
      if (store.getters.language === 'en') {
        return vals[0].enName
      } else if (store.getters.language === 'zhTw') {
        return vals[0].TwName
      }
      return vals[0].name
    }
    return ''
  }
}
