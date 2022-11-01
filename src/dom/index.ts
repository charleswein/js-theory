function sayHelloWorld(): void {
  const scrollable = document.querySelector('#scrollable') as HTMLElement
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.getComputedStyle((document.querySelector('#scrollable') as HTMLElement)).fontSize)
  console.log(scrollable.clientHeight);
  console.log(scrollable.offsetHeight);
  console.log(scrollable.scrollHeight);
  console.log((document.querySelectorAll('p')[0] as HTMLElement).offsetTop);
  // console.log((document.querySelectorAll('p')[3] as HTMLElement).scrollIntoView({behavior : "smooth"}));
  console.log(scrollable.scrollTo({top: (document.querySelectorAll('p')[0] as HTMLElement).offsetTop}))
}

const paragraph = document.createElement('p')
