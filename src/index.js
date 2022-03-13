import memeMaker from "@erickwendel/meme-maker"

const options = {
  image: './img/yodinha.jpg',         // Required
  outfile: 'yodinha.jpg',     // Required
  topText: 'PEDINDO AJUDA',// Required
  bottomText: 'PARA UM SÊNIOR'

}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));