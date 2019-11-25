const sidebarRe = require('./sidebar');

module.exports = {
	base: '/blog-web/',
	title: '王飞的Blog',
	description: '王飞的个人博客-Blog',
	themeConfig: {
		sidebarDepth: 0, // 禁用嵌套标题链接
		nav: [
			{ text: '最新资源网', link: 'https://www.zxzyw.net' },
			{
				text: '演示网站',
				items: [
					{text: 'cms', link: 'http://cms.zxzyw.net'}
				]
			}
		],
		sidebar: sidebarRe.sidebar
	}
}