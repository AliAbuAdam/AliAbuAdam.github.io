'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3bd568fc6d13bc4c9f1c14d5744e303a",
"version.json": "e63d18fa1315d412d72ca944bd3e475f",
"splash/img/light-2x.png": "8fcbe747ee0ae28ef2a9b4e779dc8077",
"splash/img/dark-4x.png": "25949a79156ce30ea66c44ef1e565b4b",
"splash/img/light-3x.png": "1f73c475583635310900eb32dca2c5f4",
"splash/img/dark-3x.png": "1f73c475583635310900eb32dca2c5f4",
"splash/img/light-4x.png": "25949a79156ce30ea66c44ef1e565b4b",
"splash/img/dark-2x.png": "8fcbe747ee0ae28ef2a9b4e779dc8077",
"splash/img/dark-1x.png": "8bc2d8b699cd656e32f0c675daf0a22a",
"splash/img/light-1x.png": "8bc2d8b699cd656e32f0c675daf0a22a",
"index.html": "3d26ba71dcf48cef785b30063257bde7",
"/": "3d26ba71dcf48cef785b30063257bde7",
"CNAME": "5589bef18c1b21af1e9855adb03485b7",
"main.dart.js": "f52bb8192871fd137b1d8a17227153b7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "ed35dd348a70fb67c799c8e4c9f744ec",
"icons/Icon-192.png": "79548e3ab614e32aa01565f750d15482",
"icons/Icon-maskable-192.png": "79548e3ab614e32aa01565f750d15482",
"icons/Icon-maskable-512.png": "4b9485d534cd239ca980379e8b983ba9",
"icons/Icon-512.png": "4b9485d534cd239ca980379e8b983ba9",
"manifest.json": "f94068aff7e5025fbf4485c89c974294",
".git/ORIG_HEAD": "748b62de048bb1777016c2ec0b3a1c50",
".git/config": "d1f0b78325e9a75bc6282d7984f3175a",
".git/objects/61/21822f499763b3d165f767180d6bb8a336963e": "96d83f506a1cceb80e0c4c7e3faf1000",
".git/objects/61/138c09d1cec46aca4257d4e39e7f75c19eb116": "a9469e80fb70ca676a1231b2b28e7c61",
".git/objects/0d/80d328d83b566b53fb0f882bcc15b45cc36459": "37bfbad04e4b757cccaa9984ae5ebd26",
".git/objects/95/8363686d7815e27c489f79c12099db1b5d9949": "68f00834fc098f3f8544731aa439f01b",
".git/objects/95/fada41361ff0379ab1bf7ec79f4dede064bef9": "766038ca300ec454ce5830e562053435",
".git/objects/59/306b68564a3b9bf9566b5a86f1cf8c928fb937": "418ef7666962784184db0a6d2220cd72",
".git/objects/92/73d0b2d0383d62940aa16b72b86113b528c67d": "1e082dc056d8f13a921fe4a2c70841ac",
".git/objects/0c/6a7ab22ce6a5fbc90ff8dee2fc241dfaa1701b": "b87a95c35d57def17739ccf1e635c445",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/ac47f14f1ce24e02e118d1184d851cf8c1022f": "e47d589778b9718aa343d71f3c434cc9",
".git/objects/68/1430b59833fcd356754ca9c81a82206f1bd6e8": "ad2f99a150dbc3b159a56dcd47419bf9",
".git/objects/57/3af868dbb11d8d8a5afeef7f5f361d1005ba68": "5a93f6b1a31b1658c237268653383c88",
".git/objects/57/1abd6785916ddb0598aa4adf1a4695537a08ca": "a4961d1ae9db973a23c067c5a60b1c75",
".git/objects/57/e85f5e1d3303585f8889e485354371875553fa": "42f63b6f2d5cd8176c8257a9b7488c40",
".git/objects/3b/b97231f31692ab5f22d8b91aa750522e36d342": "48c4097a78136ac4c8a173599caaea11",
".git/objects/3b/b6ac871dd8ed64b77ff596e4f2dd1b2b70405d": "0b175184b195a4bdb1813ad8f9f560c4",
".git/objects/6f/32d32dc70c66aca170e028d8fdafcfbd615f1d": "683287ca7a0d4ca047f8a80ffcc5383d",
".git/objects/03/a7572ca9aca9665eebd55f39a0c673d1732dc5": "02eedba782e602bcac0f3a27b371376e",
".git/objects/9b/2b3903f5f2421bb97ff7479d4c3d2dd7e0a735": "311212412952c8c666708dd5f7b3b28f",
".git/objects/9b/92431e637d959d7572fa9c0d6999afdc1dcea1": "e731c8bf6a3daf11b15eb184d48ececd",
".git/objects/9b/a04695c0c8dd3591afea8ddd09004e572afa49": "8235702cf1e5755e7358a3204b6edabf",
".git/objects/9e/7e2acbfd42f273eb0bf037b02feb0b593e0cbb": "b3588b93d586943c1e8dc1df7ccdbd3f",
".git/objects/04/b01313daa1f60391933d141f2d8a7f75f284a9": "d13262d3410c7028ffe7e35f4cfb49c2",
".git/objects/32/a3761af0e62796fcd10573e57adcc3815d0111": "12f38df352048677b2c3a7bb26610746",
".git/objects/32/93bb3c381f5f6441e55bec4472d56d99b1bd8f": "6873bc372992496cfb2b18a5dca47c65",
".git/objects/35/971e6cc2d8bdb710e8b39b9e90e4b5470e4c70": "1815fb475b5434afac3fc6646e4de0ce",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/5509dbcdabc8984fd939508dd668fbc85ebb84": "7362e0fcf98e3d3c9d37ca3ce7f592be",
".git/objects/69/6b71b5fc438d94f307d1428accef8783316166": "c151b72b5856944149e0a39827975193",
".git/objects/56/49c386b992d417a42ad61bb5eea93121cc9914": "f15d96ce59e12ff0f5ccc3419555975c",
".git/objects/56/8982e17e9bfdba37d1afe06dca86cce8e1d063": "c2683d3d7bea236a05c944200d672243",
".git/objects/51/541b10ec720da0a64b532990bd1ebad71bc5a3": "945b442b3e485dcac24c08f6791660db",
".git/objects/58/5707e49948eb171083023c2bee1eb4115aa105": "3af235c95f1d0deef289228a0df44f18",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/2d541a3caea82d58760c9efd4b34cadd948798": "e12bcdc971011022d2315789936e70fa",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/32efe5082eb4f7ab0b6b16db7af8435adbe7fe": "f2704e8e264b99a8319cb09e4499b52f",
".git/objects/34/065b8f0b56c7e4196ad9e6328de854884a065e": "7d1eb539ab91ab773381a06b5e23ee19",
".git/objects/34/16c3b858b9dcce1ecdbdfb501759203b8d1077": "37760d78425c6ef2e6e3fefdd2b6d13c",
".git/objects/5a/0030838e8dc7d0889dcf2102fba68fec1dc4fd": "0af73c946ab91eb3f2414fdaee0d2fe8",
".git/objects/5a/b79bd358a2d1685766ecc1ba6a1ea98957421a": "6695ae058ff88d206e096682d6e44a24",
".git/objects/5f/4557a4b5192896f8a1740b690064112c7ca943": "c7478e8c270748d499ddcf1364129b18",
".git/objects/5f/55ba381c2b6f05ba91bfed881e7f4a0b73c126": "b3bc2551ca2f10f3a836b6eda95d5929",
".git/objects/5f/1dd0e2a6a68ee63693da03e1e922f3d04e48a1": "7dcaa5344407e42bc940fe0fb380d0ba",
".git/objects/33/55e3edf28f81c54592cbc1df3f9572cacb4a04": "1263df150826fc528d31c0099d398a93",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/05/92c4e5913a2eb66184e0a7b487596ef18bd7b7": "85657ad2a4877e2d3441cc7c8ef17e21",
".git/objects/9d/92907e73c9aae4ae21c6c232a0e662fab5b346": "3aba38a1aafabf08df3228bb5184b073",
".git/objects/02/b47eb4baf3d59cf68890fc2a1e9bcd987f8457": "741029e50310c0aba0a2b1921e6e014c",
".git/objects/02/7b992aec1794cf4c62643d4817f3b2d2813a2b": "3dac12e3ad64ebc3726c3299ee2490b2",
".git/objects/b5/dcca79e3925b22d6e730aa1a78b75ca515bf71": "cc4a878554fdd61769f3f498bbbb8010",
".git/objects/b2/8ef60fa43e1f8b2ae0c2a89740ad03d7afa079": "bf354b7a3e9041a912ca27c072b02dd1",
".git/objects/d9/5f478523066a4478c450ff2735e1bacb2d3a04": "6dac628d502ee38463864086ee349aaa",
".git/objects/ac/db5639e268f15624cb88b9d8d4a5dccf17cabb": "58113c62074f8ec756607c3f2f0b6cf7",
".git/objects/d7/92627db37c26db651173223f199dd33525ff6d": "a4677bdd7e08f07c79736fab9dbf6385",
".git/objects/b3/cc8df2220d6f0cb6143e73b38c3878c8305b74": "c45b517ccc056621c4619614082313a6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/c71a0b105f24aae57388d282ea77da99ab37aa": "42ecf720f7d7c815659170df84cd91c5",
".git/objects/da/253878d76fc4605f38429885c254f079804896": "d875a8ac4f40ab7a22afd1f2fc0418ee",
".git/objects/b4/ed40c6334f915672b6e2346654e20f01e07696": "27ff3c6afd4cc940358a4ff93b46ff04",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/9fdbda8901d67ef0a111bbdf57b0f28f22badd": "aa5b277124b11bced44c336f4958a076",
".git/objects/d1/84f9ab76e751705e4a69e211258828a5d7fc73": "ee41ea289a1fa21cc4d12e035a436a76",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/3f3699f1428e6ddd3bf2983683384c0c2afb61": "af13df05cd3bba22db1c88de8651718e",
".git/objects/d1/1fbccbb800efee1a77096d7fb95e31d379077e": "fd620c97d6eba5ea4c7c67b7e5d2360a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/35f48c9a98cde32b344f930d1086890379d109": "a36c2cd9210ccf8830619d5b7ab3f46c",
".git/objects/ae/f9fd48710a4838d7f464efdb0b6046ad049d9e": "ac2c796080aab28b2133859c8d822da6",
".git/objects/ae/7cfc2dd7bb56a21caab70df877c4642057e917": "0d85d9e99a080cb39b7ba2ca39c6b9be",
".git/objects/ae/bf765713efbaa243022e9c8e04719ca86e21d2": "956d220bc0e739259f8aaad13021f4c8",
".git/objects/e5/964c8c5827e802684531a93c945715843d905a": "9502f28a7bc91e788c039942214adcfe",
".git/objects/e2/25bc0bc50bbec0d390dd2b2cf5937108f43d0f": "28980fdf04cf5c6e22f863cf7d6a1297",
".git/objects/e2/29f102723e35a92c0ee0b8e7375a70f9a2018e": "a498bba617c955d81d08040ae55dbab3",
".git/objects/f4/e99030b2ac9e629bd098220eb5b3128e57e7c3": "e6a4110d638beb0bda94787d026c3420",
".git/objects/f4/e2b971e8006e8764f9592742ff0267932c2e3c": "43e223b80360103be73dda00923a8761",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/58ed08270e8e0f0778d6c8b9b078087eb866a4": "c2f3acae96242a3f6e58ecc4a4e5d327",
".git/objects/eb/e9383ff92457c8ab5682ea5a4e397d1064cfcd": "912f0fac613fd9d9e494a2482ad8ddb0",
".git/objects/c0/64b4b6f186720df6134c00b0b20978dd43462a": "e0b411bc8ae6c48e93fb497963e2f22e",
".git/objects/ee/29653184887035619dcaee7a1e4260b3c75651": "d44795787a3d3cb186b4c66ddaad134f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/ec8fcd5c55a1f20b6cee06ca7ccf091086dd90": "b6018786b58620736db5e53471c16e4d",
".git/objects/fc/7a46d92a1cdc283d48ba2dd7bf07a7842318f3": "3b402d51c7b54d7b3d1184afe7995ad3",
".git/objects/fc/a7011798e6b776a4cebcdc0661575ea41e0a16": "8ccb2963f9da1ea63c0bd583d253915a",
".git/objects/fc/6641898eb45db3feb8f8b42f7a5386ddf03e32": "d5ac0a4bf6bc9d9b247e7c1bdd30d103",
".git/objects/fc/36d5f22afacdc4931abe0ac77bc28af5b49357": "2f942bfff17d4a7444f5a778292f41a4",
".git/objects/fd/1a2215bc71ad399a7afa81303ee2132f131c52": "4f980769df6765a28bc1d53d86dff1df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/70c97d3d342152787388c55bacd44ee4e0780a": "3a6b569a2e80bd23da5a69860e8d69ca",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f5/4142e2c1e63dddc0eaec9e75cc574fd5e58913": "9f685e828f27b281688b9b00f8d54de9",
".git/objects/f5/fdf91dd6f16d3000db7c8374a729504b9b3299": "4ed562a935b903c7c837204200c5bf43",
".git/objects/e3/d3304c7d85f5c9f051193c84036edda71aa92a": "15ab2b94eb9873b58f4707bf1c18787d",
".git/objects/cf/97ecc36239c59300cb0d90b13cbcae9bf6a7e8": "bed50be28960247d2c326064b9a8dab2",
".git/objects/ca/1008cfd3a8ae7a9f4f9deb7948137c7a86b2f4": "860ca666f548ac571a6a6da69b8b46fd",
".git/objects/fe/1596c9b2d93ef1693170d2a0509ebd23803ccd": "281e1412b06bae21f1f1ef09eff3da0c",
".git/objects/fb/8c28437a98d7f574d8603f7589ab27fea7bd4f": "d9737e799e850cb4a2b599c72b02274d",
".git/objects/4e/81fdeda4c3b736cef96a2a49e52464ba07366b": "50a3b67b041a4f842fafcd8358305b6d",
".git/objects/4e/d8e4b419c1a517b0110b34737fe513bd1cf78e": "049e57861c6f3510307f3e15194937f4",
".git/objects/4e/1ca2993e33c9f98a9cc47cb9aa36906c568924": "e2347963b8ae9f39ed54ef480c9dc3c9",
".git/objects/4e/0795da811581c53646b32fd2d87f4858bc4e3f": "eb52e568012955d91b85dc5db763e44e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/e88ad3997bd3c3f38287f8e32b438ca8ee7511": "aadab5dd4a83af85b4a00ad32a4a1fd7",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/7205ed5bf890267da9f3d8d1cb75a8da3b97b6": "931aa343603dca16a9f6820bff845c13",
".git/objects/27/9631630d3c4694eed76cabf3cfeda1a98a69e3": "1c615c7dfadd3ac5c075b6af85cfc5fe",
".git/objects/4b/9a7babf2efb22c039e27698396dff05a6fbbbe": "97bb65884f30a4385681ec91b3f4455b",
".git/objects/4b/ffb78e6770a1543422086cac131443a19076ea": "21a88d74dfda29cdeacd6e319fdda92b",
".git/objects/7d/6c14f1a3d5daf3b8699ec48afca4aca81cf4c5": "bb9950c4dc71b388cc4dbdf9b1759c54",
".git/objects/7d/511b71bf5527e46b26a8bb51cda6e24f0b5015": "7f5a604160d62d50467d1d8fd8a9acda",
".git/objects/29/fbd5c2a1541426c336fe449799ad806d695352": "de30a4088aac46e15d6f62d1666991a4",
".git/objects/7c/6855d4a82e9d462b580484482fb6c0836bd2ef": "33514213e9915d4d40903e7ddf2692fa",
".git/objects/16/55779e478092cb24cd039dec7136e8937b1805": "9ee4db54f007c98637e31f20451b115d",
".git/objects/16/89bb8d2bcb05a20620500fd414d89aed143b1a": "2f77ee68bfbfef740d4b0a7fc19be9d7",
".git/objects/16/2933ab547c31c1dc72b67658a0bc306688c6e5": "44a3d2d8bb22990ab6110a3604f57682",
".git/objects/42/ad917a07e59c5e6829dd067af4da19df96e94d": "9fe0e153b905e097c6fff8f6195d6680",
".git/objects/73/a412cd370d052ccb8e8ea1214cfe52c408e68a": "1b2cba90f82055230f15ea0bd0734e43",
".git/objects/87/5391d222154cad9c9114dff8e6568b59b6589f": "8bced4eb3d25925a6665af1ae30b1089",
".git/objects/87/aead5bab1106d20b74d3c383768dff312235f8": "cd31f5d5732c8c27846a2d833c286c12",
".git/objects/1a/d1c9834f38645b5a44a750796211fb344414ab": "7e9a7eca1291cfa968641772f6cb4c7f",
".git/objects/28/d425a2bccfb0f8f0a2f9faa0330d6a19e1b605": "9b7b25f11408a332467e870c90164da6",
".git/objects/7b/63e1a872968b358b80fa0ec92e2e135eb3015b": "54f0fa6b6ecde20254838612239408fb",
".git/objects/7b/90e27b20efd2df7e6c7a5d11edd28fb30db533": "155c130d048ced0c809c5b57432d486e",
".git/objects/8f/dcf53402b675fa9f3d8e4ed6c457d12f205f1d": "91ab11423ca8f3d5bbe43fcf4dd8d859",
".git/objects/7e/46b2df4fe930eb3347a625caba424f49c714a0": "5e446ac8070869f4a63b0cefb18da23a",
".git/objects/10/347fd95cc32d548034964e89db2aa1464c77f3": "caa08e89817479e4700330cb6932c3a6",
".git/objects/10/08814455dc7bc95a8ec275e04a06024a4398c4": "5a56364c78dd5040c2d11e6838946441",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/26/02b7663374e0d49e6cd5ae729606b961410ba9": "e1e687279ff2e59ff0fc0b869bd64c32",
".git/objects/4d/e934ab3571308e4900c23603f26909ffa9fdce": "d2ec0b0c05f9a0d18d1cc2dcfe014cbd",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/81/acf2bb0cb4ea683072dffffa77fe194c0e0850": "9d0cd95fa482709b9c396c08c3c200a6",
".git/objects/44/cc1421574e1d9f0fe2ed37e2e1a508ff35a3f3": "33278c1fd6ef25dd8de175c7326f805f",
".git/objects/2a/16e8633af2347344e996e0ac8f9bb027f3a4df": "fe17b5a8e34db2683bab09d0d35c7110",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/051de5d068b6e42387948440d1e1d71f99d80d": "f78d3a0eb883780d978e63e01b78bab3",
".git/objects/6b/f48e8fbd9b08bb143b6faef468f3555be7a370": "fc3786872fc90f573816dac9a6cbdc99",
".git/objects/07/c084c7d923d212cb00c59fc0a656b9b7466db6": "0b9e554c449385c27bc7a6a67c4e34ce",
".git/objects/07/c88a65e7a342dad944a5100a5090ebb628335f": "ed70bd3b756a3aba9b732036367b413c",
".git/objects/38/716f3c3ad4cfbd7f44120c2c30a4204c95201d": "a03c97944cdf77e8ce2bc7ed73360598",
".git/objects/00/0638926c5cd0d1cf2c62682f97b71903a66d09": "15e16b94c79c17043ad76bdd7d3ae7c3",
".git/objects/6e/713ba258facf12908fd43e672b51d5509f3939": "753b2450a5e9a1a37daf1c7a64d996ec",
".git/objects/6e/699d82754ba97a86ac0100e740a449fa2d5cef": "264592d2454a618df506f40e26fff76b",
".git/objects/6e/0243bd799b790348e06fce653b6bfeab702495": "5d92facf2dbc09cd5b9a91dbb99b17a0",
".git/objects/36/e3515d96561071f9a8de8c5d5c54536b0e001a": "ec3b360478d6bf649191401cb1b35e94",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/da8611155e868ebc4938b6b1aa17ab18bdf779": "aa0280e87cd1618d3e2e069e87503e2d",
".git/objects/09/83d267954a4f00bcdc41ec0ba785b71b99f375": "636e4ce2e464e2a3029da5882317b39e",
".git/objects/09/5f4d3710a8e65aee0a692510ba2cceb000e7cc": "2f52d5421c1f19787695b005d843d059",
".git/objects/65/1feb180bb62330f6e74e0b247521025347e941": "cfb81a7f66e0b2ae6460c143b8d4cb0c",
".git/objects/62/7384c6f371cc486f7ada3b66e4f9f0845a1c8b": "44b1ffa23984bf95c7a29e31cf88b970",
".git/objects/3a/e3ba3e5d71158f0820b0ea090fdfd95d00a30f": "8ab30de66352acfbe50f6b0e1a7f639a",
".git/objects/53/7d018523a2e0d372349aa6889baa3804fdaf05": "994b33eca8b420b71f4dbb9f26cd19ee",
".git/objects/3f/4849f730cbe86a5dc5e116fa50977ca4b5064d": "33d1196f0435eab8f98c5e88ecfbd74d",
".git/objects/30/71723796603c177fb664fd8ccd63db47f23bdf": "1e13d6dcc463d1e979fa857dedbbcd34",
".git/objects/5e/154aa1dd54b43292774d4a6931102302e901fd": "135cd5d7c0dbc6a57f750ebfe499132c",
".git/objects/5b/a2304c0138507617724794a04f772b28769c1e": "16adb20be1ad1276edf109712b49b51a",
".git/objects/5b/9e1544e2827b6adb941b91faf23ef63d15c0ed": "1463bbc2e42742034387afd58feae678",
".git/objects/06/ecedd4802fe941677a061b002f4d62255475f1": "46558bf6f3406c7fe759202fd4a25545",
".git/objects/99/f340eb0888022d60ca26d996f6dfcc0b94f343": "cc77b3677452b40c254fa1bdce922149",
".git/objects/52/0a2a24954bad79361a91ce9da8380f7347d958": "bed84e9e0b86739fad8cd38764cd0360",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/55/48b59765ddacad1bdfcad00b587a42bb215c01": "a5141e743c02ac8e3e5c512721a96a58",
".git/objects/97/f4aab2f9d4e3b341f9aff86e5759920e279a97": "13042e052e106d7dac0abf20b492e2d9",
".git/objects/0a/57ce626e8c005130b6b3936191f8c9c7eec5f7": "7a0f489a0c2bdee8203b04b3d8efd279",
".git/objects/0a/8708b2c2254f15f71e81387854758d85d2e155": "036a040e6bccc4e473f86f02b0e2efce",
".git/objects/64/6767f54c6c0d822de07a95afd6ee14f999b850": "9b5023538207dc504cddc81681e271be",
".git/objects/64/5f747db0c85e82acdddf87fc4225adb9cc45ad": "c24802e4f222d7ad953359cf583d9c2c",
".git/objects/64/b257f18095432902a796802a54a65e8f0eece0": "05afe2a50b9223bd222315c3d5ede124",
".git/objects/90/b5f9d5c18a97e5147ba72542f4fbaa22927a16": "e61fac495a047e387aed9cd921318757",
".git/objects/bf/abf2f878dd42071a4408754747261d3766e949": "e529d9f266df75214e21c743570a5d48",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/82cce1000e2276c2328b2e5aa662e5209fa38f": "6fb1b6d143471d5cf6f1b35f5395b2a1",
".git/objects/a0/22b3a7eb8b53526be37a8954bcedee4cf72bd0": "1f17fcae62b40b9d1a4de28afd09226a",
".git/objects/a0/5ed1c114ed69f8900fbe5a81f6edfe84ba4c67": "a14f6331c7173130ae00f12dff1804f0",
".git/objects/a0/9a05beba53824fa4b4cdb4120af61d1ff3aa15": "dd975ac9dff75068a95e04ff98076170",
".git/objects/dc/82198aeed44d810661b7801c9b3f439fe35a65": "9de783ddab0edbf883df991e3fc95624",
".git/objects/dc/b14c00c35eff5d13dd9ec0cd7ab6f30b5aa364": "a157072790e57df72336854c2f081d85",
".git/objects/d5/0420ad8e9125decb6b5398d302e2bac81593df": "0fe27dc34ca5597339408f251c0ad037",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0af7ea45cde4c60dd1b036fdea48cc316837bc": "ef89ba4a7d9351e5524d7620cb32c0f4",
".git/objects/b0/e39a7ad61a9ed5df67f6a712db7a8a7a1635c6": "e499ee1783c7cb8d0462c8d1acd68e78",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/99b9eb706873fd4bbcdb2056ed15de7fd9ca17": "efc4a7aef8315d99613e87e3adcc854a",
".git/objects/ef/a17db9410d85518eff3192bdaf1f6399f45c20": "aa46e2da5a6c6f2a920ec208bbcbc928",
".git/objects/ef/3d04fb0330f9289c310fd52d6d7cbfe42a8147": "a59d3f9e3e166a24e3c6f2c2e9b7bebc",
".git/objects/c4/7bc5248a1c5e5aebe54581da02a6752800f7bf": "1bf39446efafe75805d28cef0efa8db7",
".git/objects/cd/8e78211e1895bd27eedac53150f055f39bdc68": "7ec1cad16cde41d859aff3b480baec90",
".git/objects/e6/ee9571470ba3c9dd8e4ff206972e7830d3ac81": "8b2b0b17970f03bbd42663196b6c45b8",
".git/objects/f7/7c8dc3a2b0396fce070c9e2dbd73d25669ce93": "5b1c47e95ac47649221dfb2ef1879931",
".git/objects/e8/cac5ab351d4515cee753d18154280b737de33f": "2daab70005f851f71a2429c1e0509f2b",
".git/objects/e8/85f912f9206c75aed0853d365c9a5056293c35": "e07b44d5f408eda6baf212d191d858e9",
".git/objects/ff/231d9ea7c4145602e8953c53a2fdfbf84d7367": "202a34d424b65b7950610777ec3f2646",
".git/objects/c5/694c834fb32170fb18d1b01381e9c4d1cfa905": "fe72d1e71ff8354dee4bee85ba124496",
".git/objects/c5/0b1fcaf53c9f6bc9473442538dc681ea5acc1f": "53ee0bb26bc7b55956acdae3e42078c8",
".git/objects/c5/a27dde46e85e5f08af61464490e57fbf50ce73": "77b9f5394a0a3b3a5a1b067d21d72d21",
".git/objects/c2/bac43dd254f5f0e1b30ad61a05849a90e9e420": "8d1b34f0efd4890978399e05132aaf8f",
".git/objects/c2/9e8c9d25cf8a7524cf552be57c63f4ddf53e26": "de435f8443781cdf0c8abd11b989fe28",
".git/objects/f6/4231230484095e106ee69bc918c460a8a797a3": "46554edb5251d700d12f3026f3e0ff40",
".git/objects/e9/8ec3b69dbd6d75bdd75f2187dac6e00f7c11ae": "0a8016f5bb0cf77b3b2f35da068c2060",
".git/objects/f1/b4842be9f07eb30adfb8fbacfb72f819daeca6": "5ae1dd84f1c3dd3d654d868e3ea6c192",
".git/objects/f1/ae699c25960d82af6dc82ffd2d2d1ee81cf298": "5d31b23686217b1b7d11715e43daf140",
".git/objects/cb/6d244e7fffe9a3b864f98cfe7a73b5f4d83bcb": "86569539a460121972b54502336d5a40",
".git/objects/ce/c6bb8a7cd13ef7b1e95f361c93ac7cda382878": "6393aa7beb34e60313506e1a0beb61fa",
".git/objects/ce/356f0b1702b4817c637d9f6e2c18507fc80f41": "e13018442aa95fa0c459a173d87a1203",
".git/objects/79/1c3204df04341bb5be7b9977e6df767fa698cf": "ad0d59be205e94809acf931a0c42c2c7",
".git/objects/83/2e912c62688c4e644945f6bd2ea42ea8ddfcb6": "4a66bd8383fc9af64b4ad47b8b8cc957",
".git/objects/1b/844600ba17beea5c0b9d82a2a7e3b05b0f5297": "79b24f3271de03da945e738af0edf429",
".git/objects/1e/bc7fc816ddb06f575acd94fcff5d535232d370": "8411202522024df6cee477ea8f100fd3",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1e/8cd78e37190ce8f8cda7988eb09562382d8acf": "18a95343b99994cc9ae49f1a2364e8f9",
".git/objects/1e/3feb27a1218a0735fa092da999c482c5729f30": "49f86b0f9c22c9f0ea147049b6a0acf5",
".git/objects/1e/9fabee58e8ca785455ef0755605c8081d8b2ae": "2fe1750b81b4dc4ef99ef1a45e10228e",
".git/objects/84/73ed1af8bd76a521450267e3c0e968fb9bd7e7": "936f78a4491bc891aa63e632b633e0dc",
".git/objects/4a/191418dc29ee6c27d7f052f3d699334ab6c29b": "3abf25485c6eede2535f767215ee678d",
".git/objects/24/d1a893f6263a543114b1051c662543dc20245f": "1d15ba5a6753aa9d893e280f3d733289",
".git/objects/24/f1aed311b529b8c59cee9fd611c1d6cf9eea76": "8c0c16303e2371b810c23d82886aea21",
".git/objects/4f/255b6343e38a9c39071978c63ff40068d6c3b1": "b792bd1de52a2e8011949eed4ed30ca2",
".git/objects/4f/5b67a8d65d8a794b3158a53b45663c40c266c0": "62c19c20906e17e53fa61fa9134d43ce",
".git/objects/4f/66c2883f2cc31a6d1d79f93b57ac1bcfb70e10": "a27455184f65d8b4a01b7013b4e3885c",
".git/objects/15/77f7d2f0da8ef3b32472adf1c5b9a1a31d8b00": "3784e567ab00b0aad05028343310565b",
".git/objects/85/e06788ad2e9b1f8a0c37fa9d2cdd99dd886e07": "c334c2b024f63066be70e66ee0ee28d8",
".git/objects/85/0af8c995bc71bc8613b3333c91a9943dd5ffac": "ab1b52ffa967f242f45e7a92fd8c8727",
".git/objects/85/eeec51a406069f93f9bf7a968da2f61c41db2f": "9b5512118c316aa1510a5225072eb59b",
".git/objects/1d/daf5562174e15bd6e262e1de70a0ea13b7ea77": "2872994c691195ac8bc121518c4e9220",
".git/objects/71/50e412129cc0f9b710679598a78556180cc7e1": "b9dd33823f03bb0039366355c1429a7c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/c79bd0a04573fb3a1c4b0ed0f1d527f59c9f69": "3683bea4b2fb6f2c588e9da5e134c558",
".git/objects/40/7ece4b019883bf46ae3b57faa7ccabef073862": "524d01474e3a56222d16fe8983da1ed9",
".git/objects/2e/2888e277eb6b3cb598e9d7ea4706005fa626b2": "5e02e400f523ab5715b8b38954e22ffd",
".git/objects/47/3438e911424e75f0e3890f846f68c833d22943": "0613e96a399d40d575d8d08aa1c2692b",
".git/objects/8b/2172fb1867c69afbc7b138a6e312217b267f32": "8a1f8ad28bd4ff230e6d8fed692ff43a",
".git/objects/7f/66ddb0b290d60ad6b62a7cf1794391c3f7c7b8": "142bdb5461388fde9c428900fd9ed616",
".git/objects/7a/cef8e577c6db831cbe91141de24697a6df1614": "00352e68aae7540413062a4a615d381e",
".git/objects/14/043566e071ee93e3c1a8dcbb96fd9d7320f511": "a30d4560eb44e5ce7036865bf0110315",
".git/objects/8e/1330fd6e51dc3163d2abfe5082f20bddc066b1": "8d19ea14f7db59cddbedf9ebd9bb35ab",
".git/objects/22/60b2767f8474a42742a2717127d08ef25376c2": "1dc9c6465290f0d4c3d9bf5a0c337b3c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c306aec147d93f7f6a537209c919a8da",
".git/logs/refs/heads/main": "74ffb6e5eef978315b58f2048e101761",
".git/logs/refs/remotes/origin/HEAD": "3f4b7e6ff1c703f7f87ddcb35d45a30f",
".git/logs/refs/remotes/origin/main": "dd03a083cc58b4388b39aebe15dab3c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0f2ee38c0449ab3a452f0741f7f85c31",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0f2ee38c0449ab3a452f0741f7f85c31",
".git/index": "43d260e4c1b1d167d49b072b32f86e0d",
".git/COMMIT_EDITMSG": "cabb37ae9435e04752b34026b436d97b",
".git/FETCH_HEAD": "a63956cb27845391df086f84bf3df1ef",
"assets/AssetManifest.json": "d6445cb2a526588b53a8216775e63a8d",
"assets/NOTICES": "5c1024ee3fb876fd921c7955ba329bfa",
"assets/FontManifest.json": "18aec6984f9b5ca4da90fa354e5600c6",
"assets/AssetManifest.bin.json": "6c0d0ecf5889d2d18f7b0562021f833b",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7971a94c900457099070f46c83250678",
"assets/fonts/MaterialIcons-Regular.otf": "cf45b4e654d9e41aa0e5b3a28d6898b5",
"assets/assets/images/svg/cases_icon.svg": "bcd5a83e409ee078eac4b419df638754",
"assets/assets/images/svg/step_icon.svg": "5d1b9da602d9290237d593bafa9c45c9",
"assets/assets/images/svg/services_icon.svg": "f0ac65996a19c96cdae39077c9490b15",
"assets/assets/images/svg/owner_icon.svg": "ac11a5bbadf01506ec3e633eeafeb798",
"assets/assets/images/svg/tile_icon.svg": "b189ccf18955dd02f7c96255fc4229ea",
"assets/assets/images/svg/logo.svg": "5fdac17db28d015699f8ce4124f075a4",
"assets/assets/images/main/wash_detail_2.webp": "1afdb2c9252d50911d27e93bbd7cfd8e",
"assets/assets/images/main/service_cover_4.webp": "28f0d4f3ac48352a86087605137b5e94",
"assets/assets/images/main/lootbay_1.webp": "e74dbe9047a87bd5a1dc1ae6f12f1f61",
"assets/assets/images/main/python.webp": "c33cb0484501059b8882cebc2cc7ef09",
"assets/assets/images/main/watch_2.webp": "3de0beb54e80f59056ff27a6d0adf9f4",
"assets/assets/images/main/git.webp": "0e6537bff641c57d1957893bbabc0096",
"assets/assets/images/main/deloframe_2.webp": "8b8a79629ce4d8ff442fca051758d75e",
"assets/assets/images/main/figma.webp": "34de2963a528f29174672d11ff80ead9",
"assets/assets/images/main/acra_1.webp": "9ee9b5708a74181675033e6ac839cbb0",
"assets/assets/images/main/batys_1.webp": "5ef91d81540c663900d632359d79b6c4",
"assets/assets/images/main/github.webp": "29570ac36132c462ce569532f59ba8fb",
"assets/assets/images/main/thermoair_1.webp": "240345aa3de3c7990226b6001ea5fef1",
"assets/assets/images/main/owner_retro.webp": "1d646e43ac4c7cef8039c9d50fdf55e5",
"assets/assets/images/main/dart.webp": "8ca6026fc46626598e374f8592d01913",
"assets/assets/images/main/business_process.webp": "2b83a9aff966cbef66cbed2a5f6cac9b",
"assets/assets/images/main/service_cover_2.webp": "f385652785636ea3fa2de3c29eae957b",
"assets/assets/images/main/service_cover_3.webp": "91b57b92a119d8a3a97180250e05dace",
"assets/assets/images/main/ai_integration.webp": "0d47861e81eff9915c6c43470ffff839",
"assets/assets/images/main/docker.webp": "a923ccb07886ba0688fc209288e5fec8",
"assets/assets/images/main/autosecurity_1.webp": "a1f45bd7596a85b9c6235a971faeefb6",
"assets/assets/images/main/autosecurity_2.webp": "a2cb16a0e78d155b20105c153ef4d6d8",
"assets/assets/images/main/kubernetes.webp": "db1a2d0a4f7e3ab1786b90366f53d7bb",
"assets/assets/images/main/case_fake.webp": "f304bc8dc7f5710abf2fb1ddc8d282d5",
"assets/assets/images/main/stripe.webp": "f82a0d6b5918093fee2136950f8c6afc",
"assets/assets/images/main/thermoair_2.webp": "6a765c557b4b4b32fddd216c310f37a1",
"assets/assets/images/main/flutter.webp": "b5978a3794747b8f0e087914e2055871",
"assets/assets/images/main/desert_bg.webp": "eb9fc7cb3cf1eb2b9ff09740d030aff7",
"assets/assets/images/main/batys_2.webp": "00ec0b40a4889443842268cf1f75cd20",
"assets/assets/images/main/acra_2.webp": "d888fc434227346451f064f4a269e3ad",
"assets/assets/images/main/wash_detail_1.webp": "d86a3ee3cf4bc690536abe56ee959a19",
"assets/assets/images/main/mobile_development.webp": "db8f4dbf9c98e6729d2a17536a54a510",
"assets/assets/images/main/lootbay_2.webp": "3eac617c3a4d0ec02a6834b78454b092",
"assets/assets/images/main/watch_1.webp": "c2182a9b039c3a93a53a989e7575726a",
"assets/assets/images/main/deloframe_1.webp": "f8501a200ea83dbebd136c21005d2e70",
"assets/assets/images/splash_logo.png": "4989b59a1b810fd595ad1203ee00f126",
"assets/assets/fonts/RFDewi-Black.ttf": "afdb68b48c76811ebae99b2274129155",
"assets/assets/fonts/RFDewi-Semibold.ttf": "dc14c330e4912dd595f88ff902978c45",
"assets/assets/fonts/Helvetica-Neue-Regular.ttf": "53154fc364e3b971a9172cfb9955572c",
"assets/assets/fonts/RFDewi-Ultrabold.ttf": "7b074817d769a445b216f78cbaabc456",
"assets/assets/fonts/RFDewi-Regular.ttf": "bfb30c2677ae3236b6f893704c76f019",
"assets/assets/fonts/RFDewi-Thin.ttf": "798b664893954f51075a65edba994968",
"assets/assets/fonts/RFDewi-Bold.ttf": "b68b4f571874a966f4e4c3a01dd90d9e",
"assets/assets/fonts/Helvetica-Neue-Medium.ttf": "7041884185e13c6187390afe25b1e9e7",
"assets/assets/fonts/RFDewi-Ultralight.ttf": "3771adf0ffd66a930da44b0f43d66d5f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
