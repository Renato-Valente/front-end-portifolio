/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import spider from './assets/spider.jpg'
import links from './assets/links.svg'
import { useState } from 'react'


const Header = () => {

  const [dropdown, setDropdown] = useState(false);


  return(
    <div className="header-container">
      <div className="header-image">
        <img src={spider}  height="50px" width="50px"/>
      </div>
      <div className="header-links">
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>My Links</li>
        </ul>
      </div>
      <div onClick={() => setDropdown(true)} className="header-icon">
        <img style={{display: dropdown ? 'none' : 'block'}} src={links} height={'35px'} width={'auto'} />
      </div>

      <div style={{display: dropdown ? 'block' : 'none'}} className="header-dropdown">
        <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>My Links</li>
        </ul>
      </div>

      <div onClick={() => setDropdown(false)} style={{display: dropdown ? 'block' : 'none'}} className="dropdown-back"></div>
    </div>
  )

}

function App() {

  const style = {
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'end'
  }
  return(
    <>
      <Header />
      <p style={{paddingTop: '80px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, aut illum obcaecati id unde adipisci ipsum voluptatum minima ea. Minima aperiam fuga eveniet assumenda expedita dolorem ex natus dolorum at.
      Amet dolor autem, vero non cum perspiciatis corrupti minima error, obcaecati quis quisquam asperiores explicabo saepe hic mollitia nulla architecto, ipsam ad fuga vitae earum! Nesciunt, rerum? Suscipit, sed ea!
      Quis quasi quos mollitia, distinctio eius voluptatibus reprehenderit quibusdam beatae amet, officia magnam natus voluptates neque dolores repellendus sed! Distinctio, ab modi? Culpa non laborum quis fugiat ex sed quod!
      Autem atque aspernatur quo? Eligendi, esse excepturi. Et nobis explicabo voluptatum ipsa iure repellendus consectetur ipsam sunt quisquam recusandae? Blanditiis quibusdam rem vel in magni ea vero reiciendis possimus nulla.
      Vel maiores dolorem odit, placeat sed corrupti veniam ipsa architecto sint laboriosam. Minus eaque accusantium magnam deleniti sint debitis in corrupti alias aspernatur delectus ab aut, ullam at aperiam velit!
      Odit vitae placeat nemo voluptas, nihil ad distinctio ea iure doloremque, libero laborum accusantium fuga enim minima aliquid quo, quod nostrum ratione ex? Neque saepe animi dignissimos debitis facilis ab?
      Voluptates aut vitae quo exercitationem rem aperiam? Officia ducimus sequi error, nemo blanditiis recusandae unde libero. Mollitia corrupti similique aspernatur recusandae impedit. Velit eius consequatur atque nemo quis, cum accusamus?
      Consequuntur enim distinctio id quod possimus sequi nam ut nihil dolor commodi quis molestias quaerat officiis soluta provident magni esse, ex laborum? Nihil ad exercitationem accusamus facere recusandae repellat eaque?
      Doloribus voluptatibus libero laudantium aspernatur aliquam voluptatum iste iure fugit officiis cumque laboriosam nam dolore laborum, facere esse ipsa velit deserunt consequatur dolores ab eum asperiores molestiae incidunt recusandae. Laboriosam.
      Amet alias praesentium harum, provident suscipit mollitia quaerat laboriosam aperiam molestiae ipsa? Repudiandae ducimus dignissimos natus laboriosam ratione alias commodi? Consequuntur nihil debitis explicabo ea cum eius ad, perferendis voluptatum?
      Ab, pariatur veritatis nesciunt quasi aliquam facere labore qui temporibus quibusdam voluptas, nemo nostrum? Officia, molestias. Blanditiis molestiae aut minus ipsum dolorem a, quisquam magni consequatur vitae, distinctio voluptatem ea?
      Rem ratione dolorum pariatur at dignissimos, vel reprehenderit! In voluptatum quasi asperiores dolores aut, aperiam atque quo sed nostrum temporibus blanditiis ea. Saepe ex praesentium alias nostrum inventore amet perferendis?
      Eligendi magnam sit natus distinctio aliquid? Debitis, facilis quas? Eos doloremque ullam obcaecati dolorem impedit iure necessitatibus, earum, distinctio asperiores delectus numquam ipsum culpa natus sit doloribus ipsa voluptate est?
      Totam ad repudiandae qui, omnis voluptatem voluptates? Accusantium reiciendis maxime odit nobis deserunt, eius recusandae sed id veritatis non qui suscipit labore facere eligendi autem harum. Quisquam in debitis similique.
      Molestiae velit aperiam ea incidunt rem unde eius porro alias quia voluptate ut rerum voluptas maxime quae provident corporis qui repudiandae labore ducimus quod, accusantium beatae quos! Aut, nisi hic?
      Exercitationem, sunt voluptas molestias sint repellat nobis porro sapiente harum quia voluptatibus! Nobis quasi suscipit illum eveniet, sint inventore aliquam ex pariatur reprehenderit fuga quas mollitia ipsam ad, magni minus.
      Architecto quae libero aut fuga repellat. Veniam cupiditate maxime id. Soluta vel delectus autem distinctio nesciunt ipsam, impedit quae hic qui molestiae cupiditate, expedita explicabo veniam iste ut placeat illum.
      Molestias facere voluptas, aliquam ducimus adipisci ea fugiat odio nihil, ut, fugit totam vero illo iste. Nostrum magnam illum itaque. Ipsa pariatur temporibus tempore, eius iste totam id quae nemo!
      Dolorum fugit atque neque. Consequatur voluptate officia optio aliquam. Vero, pariatur fugit at eveniet quos labore itaque? Non, sunt quis est aut corrupti quasi, quia fugit commodi expedita assumenda obcaecati?
      Eos aut deserunt nesciunt, mollitia magnam voluptatum velit sequi, rerum, maxime eaque alias ad id. Incidunt labore tempora quo vero tempore nulla, ex soluta esse, beatae, ullam optio dicta laboriosam!
      Nobis iure deleniti sequi voluptas suscipit cumque veniam ea labore sit obcaecati in porro ducimus ex debitis beatae possimus neque nulla, id minima dicta nihil? Impedit earum alias culpa ratione.
      Modi, deleniti? Expedita maiores adipisci laboriosam dolorum, accusantium aliquam ea libero molestiae quod. Beatae ipsam fugiat nisi eum, ad ea officiis quo temporibus cum omnis, dignissimos dolor, suscipit saepe pariatur!
      Cum nam reprehenderit sint nulla similique, praesentium exercitationem deleniti repellat harum labore officia fugit molestiae cumque, dolorum minima et eum illum velit tenetur animi quaerat. Nostrum blanditiis eaque vel est?
      Dolor asperiores ab minus, accusamus architecto velit nam dolore, dolorem mollitia facilis suscipit. Quod magnam atque, ratione illum libero accusamus itaque molestias cupiditate, corporis aperiam deleniti eligendi ab porro nisi.
      Necessitatibus quas molestias distinctio fugit, nemo aspernatur ab ipsum expedita architecto provident error, nulla qui. Amet quasi excepturi eum voluptate quibusdam possimus esse ea quo, dolore autem, dignissimos, aut officiis.
      Minus, similique laborum tempora atque reprehenderit reiciendis deleniti odio quas dolores, magnam minima inventore ducimus dolore ex in ea rem neque sit porro. Eveniet esse unde quibusdam numquam quod tempore.
      Qui corrupti quia sed illum? Voluptatem, deleniti commodi nesciunt nam ab similique fugit perferendis blanditiis accusamus velit saepe culpa reprehenderit ipsam? Incidunt sunt ab sit molestiae, pariatur dolorum ut culpa?
      Temporibus aliquam voluptas rem tempore sed quo harum quis unde ipsum repellendus, odit, asperiores at pariatur rerum itaque dolores aut libero sapiente laborum quos, nihil necessitatibus veniam maxime? Non, possimus!
      Sunt voluptas optio autem eius sint dolor pariatur ducimus mollitia esse quis in cumque saepe, veniam quas dolore, cum ipsa? Veniam libero itaque aliquid sunt architecto voluptatum atque praesentium officiis?
      Doloribus recusandae quam maiores obcaecati itaque! Dignissimos incidunt perferendis, corrupti quisquam, quibusdam ea cumque adipisci asperiores distinctio eaque sed non, ullam ipsum eos tempora ratione ab aperiam quod ad? Quod.
      Adipisci necessitatibus perferendis quibusdam nulla, quasi architecto sequi. Dicta voluptatem neque sunt quas quo cumque vitae assumenda velit, numquam optio officia possimus modi magnam quae amet id impedit doloremque natus!
      Architecto magni, minima omnis hic enim accusamus reiciendis dolore. Nam rerum eos sunt aliquam quis, dolor quibusdam in ipsam temporibus asperiores eveniet iste facere natus vel. Saepe maiores nobis dolor?
      Nesciunt autem vel quasi voluptas, quibusdam accusantium laudantium, dolor quidem rem totam quo ipsam aspernatur, qui maxime eligendi eius quod. Sed amet repudiandae aliquid repellat reprehenderit ut iure nesciunt voluptatem?
      Quaerat possimus minus animi placeat? Nulla recusandae id placeat aperiam corrupti labore magni a qui officia natus, ipsam consequuntur. Perferendis repellat voluptatum ad aut deleniti consectetur, veniam repellendus. Maxime, animi!
      Error cumque nulla minus maiores incidunt et quo obcaecati, nostrum, sapiente dignissimos ratione assumenda fuga nam culpa deserunt excepturi? Placeat nam suscipit facere expedita est rerum quos tempora fugiat saepe.
      Exercitationem quia eligendi, cupiditate placeat harum nostrum voluptatum nihil blanditiis enim dolorum! Neque, molestias? Iste culpa, similique impedit suscipit in officiis, facere non debitis quia enim veniam repellendus, illum deserunt.
      Nostrum ullam rerum laudantium, fugiat sapiente veritatis reiciendis tempora tempore, labore voluptatum alias nam iusto, voluptatem quibusdam esse. Quisquam odit, accusamus facere ipsa fugit accusantium impedit consectetur nihil non quas?
      Quae aut maiores fugiat similique facere excepturi! Cumque perferendis culpa laboriosam incidunt, deleniti velit explicabo ea, ipsam quis fugit, quasi soluta. Expedita quo incidunt, impedit sed tenetur quibusdam officia nam.
      Saepe delectus laudantium quo assumenda quisquam velit expedita natus, quos nulla voluptate asperiores veritatis. Modi, inventore facilis suscipit assumenda accusantium pariatur nisi consequuntur magnam sunt error perspiciatis adipisci doloremque hic!
      Impedit sunt est voluptates dolore, at eligendi doloremque obcaecati minima asperiores! Omnis, illo. Non quis ut quaerat voluptate expedita voluptates, nemo molestias nobis, sit magni error facere. Ipsa, similique enim.
      Eveniet iusto officiis dolorum tempore tempora ab iure distinctio earum temporibus natus quos similique doloremque saepe adipisci, facere alias sint quisquam optio, reprehenderit quasi. Aliquid debitis enim neque quasi voluptatibus?
      Incidunt quae impedit a eius, accusamus cupiditate vel repellendus deleniti provident expedita totam odit eveniet omnis explicabo non debitis amet dolorum adipisci, accusantium ullam! Nihil voluptate sapiente deserunt cupiditate iusto.
      Odit asperiores distinctio perferendis voluptates nisi, suscipit excepturi vel id cumque enim repellat deleniti totam veritatis ea molestias. Error quod ducimus eligendi doloribus ipsum earum repellendus ea animi consectetur! Suscipit!
      Odio culpa aspernatur a eius quo excepturi consequuntur, tenetur dolorem est dolor voluptas fugit dignissimos assumenda! Nihil assumenda, laborum placeat, nam dolor velit quisquam animi similique facilis facere illo nobis.
      Ipsa maxime deleniti unde voluptatem laboriosam! Mollitia, doloribus totam labore harum assumenda odit fugiat rerum quas modi commodi. Odio sint reprehenderit eligendi cum similique aut laudantium, placeat quos et sunt!
      Eaque a provident minima laborum dolore ratione sunt nostrum, esse quod. Officia, cupiditate aliquam exercitationem voluptatem reiciendis omnis! Tempore nam asperiores excepturi quae fugiat omnis blanditiis beatae reiciendis laudantium! Earum?
      Impedit sit voluptatibus facere eaque eveniet molestias quam reiciendis ratione neque distinctio! Quod corporis dolore quaerat architecto. Maiores assumenda labore quisquam saepe eius? Delectus quidem esse non officiis aperiam debitis!
      Rerum iure maiores esse dolores aspernatur, quos, eius quam obcaecati incidunt molestiae animi temporibus tenetur qui dignissimos non fuga nesciunt molestias saepe perferendis id quis dolorum exercitationem? Exercitationem, ratione perspiciatis.
      Iusto deserunt natus sint dignissimos maiores quos aliquid. Eveniet, iste mollitia. Cumque, corrupti recusandae eligendi esse similique magnam officiis alias quis consequuntur error? Accusamus, ullam repellat exercitationem similique ab obcaecati.
      Voluptatem nisi voluptas quidem rerum nihil officiis voluptatum error amet. Nostrum reprehenderit in fugiat iste. Voluptate facilis accusamus perferendis ad, eum atque velit ipsa iusto mollitia laboriosam reprehenderit quod rerum?</p>
    </>
  )


}

export default App
