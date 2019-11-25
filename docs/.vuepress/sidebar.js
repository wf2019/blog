const sidebar = [
	['/', '首页'],
	{
		title: 'Composer',
		collapsable: true,
		children: [
			['/composer/install', '安装'],
			['/composer/command', '常用命令']
		]
	},
	{
		title: 'Git',
		collapsable: true,
		children: [
			['/git/install', '安装'],
			['/git/command', '常用命令'],
			['/git/command-other', '其它常用命令']
		]
	}
]
module.exports = {sidebar};