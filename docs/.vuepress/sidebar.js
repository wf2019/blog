const sidebar = [
	['/', '首页'],
	{
		title: '商品管理',
		collapsable: true,
		children: [
		  ['/goods/', '商品首页'],
		  ['/goods/add', '新增商品']
		]
	}
]
module.exports = {sidebar};