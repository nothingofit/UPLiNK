// Meteor.startup(function () {
//   UploadServer.init({
//     tmpDir: '/uploads/tmp',
//     uploadDir: '/uploads',
//     checkCreateDirectories: true,
//     getDirectory: function(fileInfo, formData) {
//       // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
//       return formData.contentType;
//     },
//     finished: function(fileInfo, formFields) {
//       // perform a disk operation
//       console.log(fileInfo);
//     },
//     cacheTime: 100,
//     mimeTypes: {
//         "xml": "application/xml",
//         "vcf": "text/x-vcard"
//     }
//   })
// });