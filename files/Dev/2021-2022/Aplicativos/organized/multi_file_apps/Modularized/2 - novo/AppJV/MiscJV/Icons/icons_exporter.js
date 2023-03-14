/*💠 For myself from the future or someone else: How this file works?
put this file inside the icons folder
check if the names and extensions of the icons match properly
if they don't, fix it.
this file outputs a list (?) that contains dictionaries (?) like:
    {
        'img_name_1': {'uri': 'uri_of_img_1'},
        'img_name_2': {'uri': 'uri_of_img_2'},
        ...
    }

then, on the main file you'll do:

import icons from './MiscJV/Icons/icons_exporter' 
{ // icons source variables
  var img_src_empty   = icons.image_empty
  var img_src_devices = icons.image_devices
  var img_src_cog     = icons.image_cog
  var img_src_missing = icons.image_missing
}

so that when you use one of this images on an <Image/> thing
you can just do:
<Image source = {img_src_cog}/>


by João Vítor Fernandes Dias, 14/01/2022, 14h54
*/

// https://medium.com/swlh/how-to-obtain-a-uri-for-an-image-asset-in-react-native-with-expo-88dfbe1023b8

//IF SOMETHING BREAKS WITH IMAGES, JUST CHANGE HERE
var hasBrokenPath = false

import {Image} from 'react-native'
// import Image from 'react-native' //WRONG

import devices from './devices.png'
import empty   from './empty.png'
import cog     from './cog.png'

function get_src_b64 () {
  const base_img64_txt  = 'data:image/png;base64,'
  const encoded_img     = 'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVChTY5h58xUeBJJmQALIciApBAssh6wCRTlR0nAGlETjo3FRhOAIoRQuhBVRIn3zFQBH9L8dp68WNgAAAABJRU5ErkJggg=='
  const img_uri         = base_img64_txt + encoded_img
  const b64_uri_ok      = {uri: img_uri}
  return b64_uri_ok
}

function get_uri_from_imported_image (imported_image) {
  // const a = imported_image
  // const b = Image.resolveAssetSource(a)
  // // console.log(b)
  // const c = b.uri
  // const d = {uri: c}
  // return d
  return {uri: Image.resolveAssetSource(imported_image).uri}
}

function get_src_to_export(){
  const src_missing_image = get_src_b64()
  let src_devices
  let src_empty  
  let src_cog    
  if (hasBrokenPath) {
    src_devices = src_missing_image
    src_empty   = src_missing_image
    src_cog     = src_missing_image
  } else {
    src_devices = get_uri_from_imported_image(devices)
    src_empty   = get_uri_from_imported_image(empty)
    src_cog     = get_uri_from_imported_image(cog)
  }
  const images_src = {src_missing_image, src_devices, src_empty, src_cog}
  return images_src
}
const to_export = get_src_to_export()
export default to_export