class Blog{
	constructor( storage ){

		this.storage = storage;
	//load all entry items
		this.ENTRY_KEY = 'ENTRIES'

		get blogEntries (){
			return JSON.parse(this.storage.getItem(this.ENTRY_KEY));
		}
		set blogEntries(blogEntries){
			this.storage.setItem(this.ENTRY_KEY, JSOM.stringify(blogEntries));
		}
	}

	class submitButton{

		constructor(root, blog){
			this.root = root //reference to button
			this.blog = blog;
			this.onClick = () =. this.addBlogEntry();
			this.init();
		}

		init(){
			this.root.addEventListener('click', this.onClick);
		}

		destroy(){

		}

			addBlogEntry(){

				let blogEntries = this.blog.blogEntries || [];

					console.log(this.root.dataset);
					blogEntries.push({
						title: this.root.dataset.title;
						article: this.root.dataset.article
					})
					console.log(blogEntries);

				this.blog.blogEntries = blogEntries;
			}
	}

	class CreateEntry{
		constructor(root, blog){
			this.root = root;
			this.blog = blog;
			this.init();
		}

		init (){

		}

		createEntry(){

			let blogEntries = this.blog.blogEntries || [];

			let blogEntry = this.root.querySelector('.newEntry');
				console.log(blogEntries);
				blogEntries.push({
					title: blogEntry.title,
					article: blogEntry.article
				})
				console.log(blogEntries);

				this.blog.blogEntries = blogEntries;
		}
	}
}