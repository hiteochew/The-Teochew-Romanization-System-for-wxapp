// pages/index/cate.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
    data: {
        list: [
           {ab:  [
              {name: 'A 聲母',cate: 'sm',id: 0,coverdata: "",coverTop: "0rpx",coverdisplay: 'none',coverbgcolor: ''},
              {content:[
                { id: 'A01', name: '柳母', ipa: '/l/', hto: 'l', piny: 'l', gy: '泥來以', voice: [
                  { name: '柳', voice: 'http://www.mogher.com/sound/syllabes/liu2.mp3'}, { name: 'l',voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/l.mp3'}],demo: ''},
                {
                  id: 'A02', name: '邊母', ipa: '/p/', hto: 'p', piny: 'b', gy: '幫滂並', voice: [
                      { name: '邊', voice: 'http://www.mogher.com/sound/syllabes/pieng1.mp3' }, { name: 'p', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/p.mp3' }],demo: '潮陽語遇元音u唇齒化為pf'},
                {
                  id: 'A03', name: '球母', ipa: '/k/', hto: 'k', piny: 'g', gy: '羣見曉匣', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/kiu5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/k.mp3' }],demo: ''},
                {
                  id: 'A04', name: '去母', ipa: '/kʰ/', hto: 'kh', piny: 'k', gy: '羣溪曉匣', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/kheu3.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/kh.mp3' }],demo: ''},
                {
                  id: 'A05', name: '地母', ipa: '/t/', hto: 't', piny: 'd', gy: '端定知澄從來以', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/ti7.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/t.mp3' }],demo: ''},
                {
                  id: 'A06', name: '頗母', ipa: '/pʰ/', hto: 'ph', piny: 'p', gy: '幫滂並', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/pho1.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/ph.mp3' }],demo: '潮陽語遇元音u唇齒化為pfh'},
                {
                  id: 'A07', name: '他母', ipa: '/tʰ/', hto: 'th', piny: 't', gy: '透徹澄以', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/tha1.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/th.mp3' }],demo: ''},
                {
                  id: 'A08', name: '貞母', ipa: '/ʦ/', hto: 'ts', piny: 'z', gy: '精清從莊章書船以', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/tseng1.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/ts.mp3' }],demo: ''},
                {
                  id: 'A09', name: '入母', ipa: '/ʣ/&/z/', hto: 'z', piny: 'r', gy: '日以', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/jip8.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/dz.mp3' }],demo: ''},
                {
                  id: 'A10', name: '時母', ipa: '/s/', hto: 's', piny: 's', gy: '心邪崇生俟常', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/si5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/s.mp3' }],demo: ''},
                {
                  id: 'A11', name: '英母', ipa: '零聲母', hto: '零聲母', piny: '零聲母', gy: '影以云曉匣', voice: 'http://www.mogher.com/sound/syllabes/eng1.mp3',demo: ''},
                {
                  id: 'A12', name: '文母', ipa: '/b/', hto: 'b', piny: 'bh', gy: '明', voice: [
                      { name: '', voice: 'http://www.mogher.com/sound/syllabes/bung5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/b.mp3' }],demo: '潮陽語遇元音u唇齒化為bv'},
                {
                  id: 'A13', name: '語母', ipa: '/g/', hto: 'g', piny: 'gh', gy: '疑', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/geu2.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/g.mp3' }],demo: ''},
                {
                  id: 'A14', name: '出母', ipa: '/ʦʰ/', hto: 'tsh', piny: 'c', gy: '清從邪初崇昌以', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/tshuk4.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/tsh.mp3' }],demo: ''},
                {
                  id: 'A15', name: '喜母', ipa: '/h/', hto: 'h', piny: 'h', gy: '滂並曉匣云疑', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/hi2.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/h.mp3' }],demo: ''},
                {
                  id: 'A16', name: '泥母', ipa: '/n/', hto: 'n', piny: 'n', gy: '孃泥', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/ni5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/n.mp3' }],demo: ''},
                {
                  id: 'A17', name: '毛母', ipa: '/m/', hto: 'm', piny: 'm', gy: '明', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/mo5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/m.mp3' }],demo: ''},
                {
                  id: 'A18', name: '俄母', ipa: '/ŋ/', hto: 'ng', piny: 'ng', gy: '疑', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/ngo5.mp3' }, { name: '', voice: 'http://tappcdn.resources.teochew.pw/teochew/initials/ng.mp3' }],demo: ''}
              ]}
            ]
           },
           {ab:  [
              {name: 'B 韻母',sname: '\n主韻',cate: 'ym',id: 1,coverdata: "",coverTop: "0rpx",coverdisplay: 'none',coverbgcolor: ''},
              {content:[
                {
                  id: 'B01', name: '膠部', hto: 'a/ah', piny: 'a/ah', shus: '膠ka/巴pa', cus: '鴨ah/踏tah8', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/ka1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pa1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ah4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tah8.mp3' }],demo: ''}, 
                {
                  id: 'B02', name: '皆部', hto: 'ai/aih', piny: 'ai/aih', shus: '歹tai2/災tsai', cus: '哎aih哎叫', voice: [
                    { name: '', voice: 'http://www.mogher.com/sound/syllabes/kai1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tai2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsai1.mp3' }],demo: ''},
                {
                  id: 'B03', name: '甘部', hto: 'am/ap', piny: 'am/ab', shus: '甘kam/南nam5', cus: '答tap/塌thap8', voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kam1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/lam5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tap4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/thap8.mp3' }],demo: ''},
                { id: 'B04', name: '幹部', hto: 'an/at', piny: 'ang/ag', shus: '限han6/班pan', cus: '瞎hat/實tsat8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/hang6.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/hak4.mp3' }],demo: ''},
              { id: 'B05', name: '江部', hto: 'ang/ak', piny: 'ang/ag', shus: '蜂phang/雙sang', cus: '角kak/縛pak8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/phang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/sang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/kak4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pak8.mp3' }],demo: ''},
              {id: 'B06',name: '柑部',hto: 'ann/ahnn',piny: 'an/ah',shus: '三sann/擔tann',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/ka~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/sa~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/ta~1.mp3' }],demo: ''},
              { id: 'B07', name: '高部', hto: 'au/auh', piny: 'ao/aoh', shus: '老lau6/包pau', cus: '樂gauh8*/落lauh8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kau1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/lau2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pau1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/gauh8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/lauh8.mp3' }],demo: '*「樂」潮陽語ngauh8'},
              {id: 'B08',name: '家部',hto: 'e/eh',piny: 'ê/êh',shus: '家ke/姐tse2',cus: '歷leh8/白peh8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/ke1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tse2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/leh8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/peh8.mp3' }],demo: ''},
              { id: 'B09', name: '弓部', hto: 'eng/ek', piny: 'êng/êg', shus: '平pheng5/頂teng2', cus: '碧phek/綠lek8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/keng1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pheng5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/teng2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/phek4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/lek8.mp3' }],demo: ''},
              {id: 'B10',name: '庚部',hto: 'enn/ehnn',piny: 'ên/êh',shus: '庚kenn/坑khenn',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/ke~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khe~1.mp3' }],demo: '注音特例：冷nenn2'},
              { id: 'B11', name: '基部', hto: 'i/ih', piny: 'i/ih', shus: '碑pi/抵ti2', cus: '砌kih/滴tih', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/ki1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pi1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ti2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/kih4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tih4.mp3' }],demo: ''},
              { id: 'B12', name: '佳部', hto: 'ia/iah', piny: 'ia/iah', shus: '爹tia/車tshia', cus: '益iah/額hiah8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kia1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tia1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tshia1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/iah4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/hiah8.mp3' }],demo: ''},
              { id: 'B13', name: '兼部', hto: 'iam/iap', piny: 'iam/iab', shus: '鹽iam5/謙khiam', cus: '蝶tiap8/捷tsiap8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kiem1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/iem5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khiem1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tiep8.mp3' }],demo: ''},
              { id: 'B14', name: '堅部', hto: 'ian/iat', piny: 'iang/iag', shus: '玄hian5/邊pian', cus: '哲tiat/切tshiat', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kiang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/hieng5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/piang1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tiat4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tshiak4.mp3' }],demo: ''},
              {id: 'B15',name: '僵部',hto: 'iang/iak',piny: 'iang/iag',shus: '僵kiang/將tsiang',cus: '略liak8/勺tsiak',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kiang1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsiang1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/liak8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsiak4.mp3' }],demo: ''},
              { id: 'B16', name: '京部', hto: 'iann/iahnn', piny: 'ian/iah', shus: '驚kiann/整tsiann2', cus: '掀hiahnn', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kia~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsia~2.mp3' }],demo: '注音特例：名miann5/領niann2'},
              {id: 'B17',name: '金部',hto: 'im/ip',piny: 'im/ib',shus: '金kim/心sim',cus: '級khip/入zip8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kim1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/sim1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khip4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/jip8.mp3' }],demo: ''},
              { id: 'B18', name: '緊部', hto: 'in/it', piny: 'ing/ig', shus: '鱗lin5/眞tsin', cus: '必pit/匹phit', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/king2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ling5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsing1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pik4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/phik4.mp3' }],demo: '揭陽語eng/ek'},
              { id: 'B19', name: '鉗部', hto: 'inn/ihnn', piny: 'in/ih', shus: '弦hinn5/扇sinn3', cus: '', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/khi~5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/hi~5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/si~3.mp3' }],demo: '注音特例：年ninn5'},
              { id: 'B20', name: '恭部', hto: 'iong/iok', piny: 'iong/iog', shus: '雍iong/窮khiong5', cus: '育iok8/畜thiok', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kiong1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/iong1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/khiong5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/iok8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/thiok4.mp3' }],demo: ''},
              { id: 'B21', name: '究部', hto: 'iu/iuh', piny: 'iu/iuh', shus: '球kiu5/彪piu', cus: '嚿kiuh8/啁tsiuh8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kiu3.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kiu5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/piu1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsiu1.mp3' }],demo: ''},
              {id: 'B22',name: '歌部',hto: 'o/oh',piny: 'o/oh',shus: '哥ko/波po',cus: '鶴hoh8/落loh8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/ko1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/po1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/hoh8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/loh8.mp3' }],demo: ''},
              {id: 'B23',name: '麼部',hto: 'oh',piny: 'oh',shus: '',cus: '麽moh/膜moh8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/moh4.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/moh8.mp3' }],demo: ''},
              {id: 'B24',name: '街部',hto: 'oi/oih',piny: 'oi/oih',shus: '雞koi/禮loi2',cus: '笠loih8/八poih',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/koi1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/loi2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/loih8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/poih4.mp3' }],demo: '海陸豐語ei/eh'},
              {id: 'B25',name: '公部',hto: 'ong/ok',piny: 'ong/og',shus: '公kong/聰tshong',cus: '酷khok/獨tok8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kong1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tshong1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khok4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tok8.mp3' }],demo: ''},
              {id: 'B26',name: '望部',hto: 'onn',piny: 'on',shus: '望monn7',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/mo7.mp3' }],demo: '注音特例：望monn7'},
              {id: 'B27',name: '姑部',hto: 'ou',piny: 'ou',shus: '姑kou/租tsou',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kou1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsou1.mp3' }],demo: ''},
              {id: 'B28',name: '辜部',hto: 'u/uh',piny: 'u/uh',shus: '龜ku/朱tsu',cus: '吸kuh熏/嘬tsuh奶',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/ku1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsu1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kuk4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsuh4.mp3' }],demo: ''},
              { id: 'B29', name: '柯部', hto: 'ua/uah', piny: 'ua/uah', shus: '柯kua/紙tsua2', cus: '抹buah/熱zuah8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kua1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsua2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/buah4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/juah8.mp3' }],demo: ''},
              {id: 'B30',name: '乖部',hto: 'uai',piny: 'uai',shus: '懷huai5/乖kuai',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kuai1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/huai5.mp3' }],demo: ''},
              {id: 'B31',name: '凡部',hto: 'uam/uap',piny: 'uam/uab',shus: '泛huam3/凡huam5',cus: '法huap/乏huap8',voice: '',demo: ''},
              {id: 'B32',name: '關部',hto: 'uan/uat',piny: 'uang/uag',shus: '觀kuan/團thuan5',cus: '越uat8/末muat8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kuang1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/thueng5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/uak8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/muek8.mp3' }],demo: ''},
              {id: 'B33',name: '光部',hto: 'uang/uak',piny: 'uang/uag',shus: '皇huang5/光kuang',cus: '蜀tsuak8/濁tsuak8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kuang1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/huang5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsuak8.mp3' }],demo: ''},
              {id: 'B34',name: '官部',hto: 'uann',piny: 'uan',shus: '官kuann/山suann',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kua~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/sua~1.mp3' }],demo: '注音特例：滿muann2/僆nuann3'},
              {id: 'B35',name: '瓜部',hto: 'ue/ueh',piny: 'uê/uêh',shus: '瓜kue/飛pue',cus: '月gueh8/說sueh',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kue1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/pue1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/gueh8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/sueh4.mp3' }],demo: ''},
              {id: 'B36',name: '橫部',hto: 'uenn',piny: 'uên',shus: '橫huenn5/關kuenn',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/hue~5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kue~1.mp3' }],demo: ''},
              {id: 'B37',name: '歸部',hto: 'ui',piny: 'ui',shus: '桂kui3/隊tui7',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kui1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kui3.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tui7.mp3' }],demo: ''},
              { id: 'B38', name: '君部', hto: 'un/ut', piny: 'ung/ug', shus: '分pun/准tsun2', cus: '屈khut/律lut8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kung1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pung1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tsung2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/khuk4.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/luk8.mp3' }],demo: ''},
              {id: 'B39',name: '居部',hto: 'ur/urh',piny: 'e/eh',shus: '居kur/豬tur',cus: 'thurh8-thurh8*',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/keu1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/teu1.mp3' }],demo: '*傻傻的\n潮陽語u/uh；海陸豐語i/ih'},
              {id: 'B40',name: '鈞部',hto: 'urn/urt',piny: 'eng/eg',shus: '鈞kurn/勤khurn5',cus: '乞khurt',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/keung1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kheung5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/kheuk4.mp3' }],demo: '潮陽語in/it；揭陽語eng/ek'}         
              ]}
            ]
           },
           {ab:  [
              {name: '增補韻',cate: 'zb',id: 2,coverdata: "",coverTop: "0rpx",coverdisplay: 'none',coverbgcolor: ''},
              {content:[
                { id: 'B41', name: '肩部', hto: 'ainn', piny: 'ain', shus: '斑painn/前tsainn5', cus: '', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/koi~1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pang1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsoi~5.mp3' }],demo: '海陽語oinn；海陸豐語eng；特例：頇hainn/岸ngainn6。'},
              { id: 'B42', name: '猜部', hto: 'ainn/aihnn', piny: 'ain/aih', shus: '㕧hainn/猜tshainn', cus: 'haihnn8-haihnn8*', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/tshai1.mp3' }],demo: '*憔悴貌\n部分ai韻字口語鼻化'},
              {id: 'B43',name: '等部',hto: 'an/at',piny: 'ang/ag',shus: '瓶pan5/等tan2',cus: '賊tshat8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/tang2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/pang5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tshak8.mp3' }],demo: '部分梗曾攝的白讀'},
              { id: 'B44', name: '賓部', hto: 'ian/iat', piny: 'iang/iag', shus: '彬pian/斌pian', cus: '吃ngiat/畢piat8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/ping1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/piang1.mp3' }],demo: '揭陽語、潮陽語專用；海陽語in/it'},
              { id: 'B45', name: '嬌部', hto: 'iau/iauh', piny: 'iao/iaoh', shus: '驕kiau/鳥tsiau2', cus: '約iauh', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kieu1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/tsieu2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/ieh4.mp3' }],demo: '府城語ieu/ieuh；海陽語iou/iouh'},
              { id: 'B46', name: '輕部', hto: 'in/it', piny: 'ing/ig', shus: '輕khin/凊tshin3', cus: '食sit8/翼sit8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/khing1.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tshing3.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/sik8.mp3' }],demo: '部分梗曾攝的讀音'},
              {id: 'B47',name: '以部',hto: 'inn',piny: 'in',shus: '已inn2/椅inn2',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/i~2.mp3' }],demo: 'i韻鼻化'},
              { id: 'B48', name: '茄部', hto: 'io/ioh', piny: 'io/ioh', shus: '表pio2/潮tio5', cus: '藥ioh8/尺tshioh', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kie5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/pie2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tie5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ieh8.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/tshieh4.mp3' }],demo: '海陽語ie/ieh'},
              {id: 'B49',name: '薑部',hto: 'ionn',piny: 'ion',shus: '薑kionn/腔khionn',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kie~1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khie~1.mp3' }],demo: '海陽語ienn；注音特例：娘nionn5'},
              { id: 'B50', name: '體部', hto: 'oinn', piny: 'oin', shus: '底toinn2/體thoinn2', cus: '', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/thoi~2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/toi2.mp3' }],demo: '齊韻白讀音過度鼻化'},
              {id: 'B51',name: '宏部',hto: 'ong/ok',piny: 'ong/og',shus: '宏hong5',cus: '或hok8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/hong5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/hok8.mp3' }],demo: '海陽語專用'},
              {id: 'B52',name: '蔘部',hto: 'om/op',piny: 'om/ob',shus: '蔘som*/丼tom6',cus: '嗑hop8',voice: '',demo: '*「蔘」取自饒平語'},
              {id: 'B53',name: '貿部',hto: 'ong',piny: 'ong',shus: '貿mong3/茂mong6',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/mong3.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/mong6.mp3' }],demo: '海陽語專用'},
              {id: 'B54',name: '虎部',hto: 'ounn',piny: 'oun',shus: '虎hounn2/否 hounn2',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/hou~2.mp3' }],demo: 'ou韻鼻化；注音特例：某mou2/五ngou6'},
              {id: 'B55',name: '果部',hto: 'uainn/uaihnn',piny: 'uain/uaih',shus: '生果kuainn2/黃彈tuainn7',cus: 'huaihnn-huaihnn-soh*',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kuai~2.mp3' }],demo: '*身體不停扭擺亂動貌\nuai韻鼻化'},
              {id: 'B56',name: '耿部',hto: 'uang/uak',piny: 'uang/uag',shus: '耿kuang2/瓊khuang5',cus: '獲uak8',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kuang2.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/khuang5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/uak8.mp3' }],demo: '海陽語專用'},
              { id: 'B57', name: '宏部', hto: 'ueng/uek', piny: 'uêng/uêg', shus: '永ueng2/榮ueng5/瓊khueng5/宏khueng5', cus: '或huek8/獲huek8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/khueng5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ueng2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ueng5.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/huek8.mp3' }],demo: '揭陽語、潮陽語專用'},
              {id: 'B58',name: '縣部',hto: 'uinn',piny: 'uin',shus: 'huinn*/縣kuinn7',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kui~7.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/hui~1.mp3' }],demo: '*旋轉\n潮陽語uainn'},
              {id: 'B59',name: '櫃部',hto: 'uinn',piny: 'uin',shus: '毀huinn2/櫃kuinn7',cus: '',voice: [{name: '', voice: 'http://www.mogher.com/sound/syllabes/kui~7.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/hui~2.mp3' }],demo: 'ui韻鼻化'},
              { id: 'B60', name: '姆部', hto: 'm/mh', piny: 'm/mh', shus: '姆m2/毋m6', cus: 'hmh*', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/m2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/m6.mp3' }],demo: '*以棍棒打'},
              { id: 'B61', name: '扛部', hto: 'ng/ngh', piny: 'en/enh', shus: '黃ng5/酸sng', cus: '夗ngh8', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/keung1.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/ng5.mp3' }, {name: '', voice: 'http://www.mogher.com/sound/syllabes/seung1.mp3' }],demo: ''},
              { id: 'B62', name: '飯部', hto: 'ung', piny: 'ung', shus: '門mung5/飯pung7', cus: '', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/pung7.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/mung5.mp3' }],demo: '部分ng韻字高化讀法'},
              { id: 'B63', name: '墾部', hto: 'urn/urt', piny: 'eng/eg', shus: '墾khurn2', cus: '迄khurt/吃ngurt', voice: [{ name: '', voice: 'http://www.mogher.com/sound/syllabes/kheng2.mp3' }, { name: '', voice: 'http://www.mogher.com/sound/syllabes/ngeuk4.mp3' }],demo: '潮陽語、揭陽語ian/iat'}
              ]},
              {explain:[
                {id: 'B-ex1',title: '編者按', content: '1. 以上內容係根據前人「潮州十五音」、「海墘閩語論壇」之「MTR方案」、《卓威廉辭典》及《菲爾德字  典》修訂而成。\n\n2. 分韻表(增補韻)部分為彈性附設欄目，讀者在閱覽過程中如有疑問或者建議，敬請與我們聯繫，切换到封面选项卡可在线联系，電子郵箱：hi@teochew.pw。'}
              ]}
            ]
           },
           {ab:  [
              {name: 'C 音調',sname: '\n潮州話八音八調',cate: 'yd',id: 3,coverdata: "",coverTop: "0rpx",coverdisplay: 'none',coverbgcolor: ''},
              {content:[
              {id: 'C01',name: '陰平',hto: 'a',diaohao: '1',lizi: '司si、低ti、刀to、紛hun、蚶ham、東tang',voice: 'http://www.mogher.com/sound/tons/tone1-1.mp3',demo: ''},
              {id: 'C02',name: '陰上',hto: 'á',diaohao: '2',lizi: '死si2、抵ti2、短to2、粉hun2、撼ham2、黨tang2',voice: 'http://www.mogher.com/sound/tons/tone2-1.mp3',demo: ''},
              {id: 'C03',name: '陰去',hto: 'à',diaohao: '3',lizi: '四si3、帝ti3、倒to3、奮hun3、喊ham3、凍tang3',voice: 'http://www.mogher.com/sound/tons/tone3-1.mp3',demo: '惠來語此調併入第7聲陽去'},
              {id: 'C04',name: '陰入',hto: 'ah',diaohao: '4',lizi: '薛sih、滴tih、卓toh、弗hut、盍hap、觸tak',voice: 'http://www.mogher.com/sound/tons/tone4-1.mp3',demo: ''},
              {id: 'C05',name: '陽平',hto: 'â',diaohao: '5',lizi: '時si5、池ti5、逃to5、魂hun5、含ham5、筒tang5',voice: 'http://www.mogher.com/sound/tons/tone5-1.mp3',demo: ''},
              {id: 'C06',name: '陽上',hto: 'ă',diaohao: '6',lizi: '是si6、弟ti6、在to6、混hun6、憾ham6、重tang6',voice: 'http://www.mogher.com/sound/tons/tone6-1.mp3',demo: '潮陽語此調併入第3聲陰去'}, 
              {id: 'C07',name: '陽去',hto: 'ā',diaohao: '7',lizi: '示si7、地ti7、袋to7、份hun7、陷ham7、洞tang7',voice: 'http://www.mogher.com/sound/tons/tone7-1.mp3',demo: ''},
              {id: 'C08',name: '陽入',hto: 'âh',diaohao: '8',lizi: '蝕sih8、碟tih8、擇toh8、佛hut8、合hap8、毒tak8',voice: 'http://www.mogher.com/sound/tons/tone8-1.mp3',demo: ''}       
              ]},
              {explain:[
                {id: 'C-ex1',title: '辨別讀音', content: 'Q：潮州話有八個聲那麼多，請問該如何辨別單字的本調？\nA：其實不難。\n\n1.你要將上面各組例字按順序唸熟，習慣八個聲調的升降變化，達到能將八個聲調和任何音節結合的程度。\n\n2.以判斷「妹」字是第幾聲為例：可從陰平mue1開始，一口氣唸下來，即「mue、mue2、mue3、mueh、mue5、mue6、mue7、mueh8」，你會發現「妹」字對應上的是第6聲陽上调，讀mue6。'},
                {id: 'C-ex2',title: '注音書寫', content: '1.不論何種情況的升調、降調，一律標注本調。\n\n2.以數字標記調號時，陰平調和陰入調調號省略不寫。\n\n3.專有名詞首字母大寫；句子首字母大寫；詩歌每行首字母大寫。\n\n4.詞語各字注音間用一個連字符「-」連接。\n\n5.降調在該字注音前用兩個連字符「- -」標記。'}
              ]}
            ]
           }                 
        ],
        tiptopshow: 'block',
        lift_into: ''
    },
    playDvoice: function(e){
      if (!this.checktap){
        var id = e.currentTarget.dataset.id;
        var cid = e.currentTarget.dataset.cateid;
        var data = this.data.list[cid].ab[1].content[id];
        var templist = this.data.list;

        if(templist[cid].ab[0].coverdisplay == "block"){
          templist[cid].ab[0].coverdisplay = "none";
          templist[cid].ab[0].coverbgcolor = "";
          this.setData({list: templist});
        }

        if (data.voice) {
          util.singleldplayer(data.voice, 0);
        }
      }else{
        this.checktap = false;
        return ; 
      }      
    },
    showDetail: function (e) {
      this.checktap = true;
      var l_id = e.currentTarget.id;
      var id = e.currentTarget.dataset.id;
      var cid = e.currentTarget.dataset.cateid;
      var data = this.data.list[cid].ab[1].content[id];
      var templist = this.data.list;
      var tmpdata = [""];
      
      templist[cid].ab[0].coverdisplay = "block";
      templist[cid].ab[0].coverTop = (e.currentTarget.offsetTop+100) + "px";

      if(data.demo){tmpdata.demo = "\n備注："+ data.demo;}else{tmpdata.demo = "";}
      if(data.hto){tmpdata.hto = "\n潮正會潮羅字："+ data.hto;}else{tmpdata.hto = "";}
      if(data.ipa){tmpdata.ipa = "\n國際音標(IPA)："+ data.ipa;}else{tmpdata.ipa = "";}
      

      switch(cid){
        case 0:
            templist[cid].ab[0].coverdata = "序號："+ data.id + "\n聲母(十八音)：" + data.name + tmpdata.ipa + tmpdata.hto + "\n1960年粵教潮拼："+ data.piny + "\n廣韻(聲母例字)："+ data.gy + tmpdata.demo;
            break;
        
        case 1:;
        case 2:
            if(data.shus){tmpdata.shus = "\n舒聲字："+ data.shus;}else{tmpdata.shus = "";}
            if(data.cus){tmpdata.cus = "\n入聲字："+ data.cus;}else{tmpdata.cus = "";}
            templist[cid].ab[0].coverdata = "序號："+ data.id + "\n韻母：" + data.name + tmpdata.hto + "\n1960年粵教潮拼："+ data.piny + tmpdata.shus + tmpdata.cus + tmpdata.demo;
            break;

        case 3:
            templist[cid].ab[0].coverdata = "序號："+ data.id + "\n調名：" + data.name + "\n調符(例)："+ data.hto + "\n調號："+ data.diaohao + "\n例字："+ data.lizi + tmpdata.demo;
            break;

        default:
            templist[cid].ab[0].coverdata = "序號："+ data.id + "\n" + data.name + tmpdata.ipa + tmpdata.hto + tmpdata.demo;
            break;
      }
      templist[cid].ab[0].coverbgcolor = "rgba(0, 0, 0, 0.2);";

      this.setData({list: templist,lift_into: l_id});
      //util.toClipboard("潮州話羅馬字注音方案\n\n" + templist[cid].ab[0].coverdata);
    },
    hideCover: function(e){
      var cid = e.currentTarget.dataset.cateid;
      var templist = this.data.list;
      templist[cid].ab[0].coverdisplay = "none";
      templist[cid].ab[0].coverbgcolor = "";

      this.setData({
          coverdata : "",
          list : templist,
          lift_into: ""
        });
    },
    lplay: function(e){
        var cid = e.currentTarget.dataset.cateid;
        var data = this.data.list[cid].ab[1];
        var datasum = data.content.length;
        util.lbplayer(data,0,0);
    },
    hideTip: function(){
      //wx.setStorageSync(tiptopshow,"none");
      this.setData({
          tiptopshow : "none"
      });
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    },
  onShareAppMessage: function () {
    return {
      title: '潮州話羅馬字注音方案',
      desc: '潮州話正音正字促進會',
      path: 'pages/index/cate'
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title: '正在進入',
      mask: true
    });
    
  },
  onReady:function(){
    // 页面渲染完成
    wx.hideLoading();
    this.audioCtx = wx.createAudioContext('audioplayer');
    //wx.setStorageSync(tiptopshow,"block");
  },
  onShow:function(){
    // 页面显示
    //this.setData({
    //      tiptopshow : wx.getStorageSync(tiptopshow)
    //});
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})