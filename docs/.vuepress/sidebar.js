const sidebar = [
	['/', '首页'],
	{
		title: 'GIT',
		collapsable: true,
		children: [
			['/git/install', '安装'],
			['/git/use', '常用命令']
		]
	}
]
module.exports = {sidebar};