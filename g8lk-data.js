// Grade 8 LK Human Geography: Population and Migration
const grade8LKLesson1 = [
  ["Population Distribution","The pattern showing where people live across an area.","人口分布：顯示人們在某個地區居住位置的分布模式。","Distribution asks where people live.",0],
  ["Population Density","The number of people living within a certain amount of land.","人口密度：居住在一定面積土地上的人口數量。","Density asks how crowded the land is.",1],
  ["Ecumene","The parts of Earth where people can live permanently.","人類永久居住區：地球上適合人類長期定居的地區。","Think of Earth's permanently inhabited space.",3],
  ["Physical Factors","Natural features that influence settlement, such as climate, water, soil, elevation, and landforms.","自然因素：影響聚落分布的自然特徵，例如氣候、水源、土壤、海拔和地形。","Nature helps decide where settlement is possible.",6],
  ["Human Factors","Economic, social, cultural, historical, and political conditions that influence where people live.","人文因素：影響人們居住地點的經濟、社會、文化、歷史和政治條件。","Jobs, culture, history, and policy attract or repel people.",7],
  ["Arable Land","Land that is suitable for growing crops.","可耕地：適合種植農作物的土地。","Arable means farmable.",2],
  ["Arithmetic Density","Total population divided by total land area; the average number of people per unit of land.","算術人口密度：總人口除以總土地面積，表示每單位土地的平均人口數。","All people ÷ all land.",0],
  ["Physiological Density","Total population divided by arable land; it shows pressure on farmland.","生理人口密度：總人口除以可耕地面積，顯示人口對農地的壓力。","All people ÷ farmable land.",2],
  ["Agricultural Density","Number of farmers divided by arable land; it gives clues about farming methods and development.","農業人口密度：農民人數除以可耕地面積，可反映耕作方式和發展程度。","Farmers ÷ farmable land.",2],
  ["Scale of Analysis","The geographic level being studied, such as a city, region, country, or the world.","分析尺度：研究所採用的地理層級，例如城市、區域、國家或全球。","Zoom in or out changes what patterns you see.",7],
  ["Clustered Population","A population concentrated closely together in certain places.","群聚人口：人口集中居住在某些地點的分布型態。","Clustered means grouped closely together.",3],
  ["Dispersed Population","A population spread out across a large area.","分散人口：人口散布在廣大地區的分布型態。","Dispersed means spread apart.",4],
  ["Carrying Capacity","The largest population an environment can support without exhausting resources or causing serious damage.","環境承載力：在不耗盡資源或造成嚴重破壞的情況下，環境所能支持的最大人口數。","How many people can the environment support sustainably?",8]
].map(c=>[...c,1,'8lk']);

const grade8LKLesson2 = [
  ["Infrastructure","Basic systems that support a community, including roads, transportation, water, electricity, and sanitation.","基礎設施：維持社區運作的基本系統，包括道路、交通、供水、電力和衛生設施。","Infrastructure is the framework a community runs on.",0],
  ["Social Services","Services that meet people's needs, such as healthcare, education, policing, firefighting, and waste collection.","社會服務：滿足民眾需要的服務，例如醫療、教育、警政、消防和垃圾清運。","Services support people's daily well-being.",1],
  ["Urbanization","The growth of cities as people move from rural areas into urban areas.","都市化：人口從鄉村移往城市，使城市擴張的過程。","Urbanization means cities and urban populations grow.",2],
  ["Industrialization","The development of factories and large-scale manufacturing.","工業化：工廠與大規模製造業發展的過程。","Factories turn production into a large-scale system.",3],
  ["Tertiary Activity","Work that provides services, such as healthcare, education, transportation, banking, and retail.","第三級產業活動：提供服務的工作，例如醫療、教育、運輸、銀行和零售。","The tertiary sector serves people rather than making raw goods.",4],
  ["Uneven Development","A situation in which some places have more wealth, jobs, infrastructure, and services than others.","發展不均：某些地區比其他地區擁有更多財富、工作、基礎設施和服務的情況。","Development benefits are not shared equally between places.",5],
  ["Electoral District","A geographic area whose residents elect a government representative.","選舉區：居民選出政府代表的一個地理區域。","One area elects one or more representatives.",6],
  ["Census","An official government count and survey of a population.","人口普查：政府對人口進行的正式統計與調查。","A census counts people and gathers population data.",6],
  ["Redistricting","Redrawing electoral-district boundaries to reflect population changes.","選區重劃：根據人口變化重新劃定選舉區邊界。","When population moves, voting boundaries may move too.",6],
  ["Natural Resource","A useful material found in nature, such as water, soil, forests, minerals, or fuel.","自然資源：自然界中可供人類使用的物質，例如水、土壤、森林、礦產或燃料。","Nature provides materials people use.",7],
  ["Resource Depletion","Using a natural resource faster than it can be replaced.","資源耗竭：自然資源被使用的速度快於其補充或再生速度。","Use faster than renewal leads to depletion.",8],
  ["Environmental Pressure","Stress placed on land, water, food supplies, energy, and ecosystems by human activity.","環境壓力：人類活動對土地、水、糧食、能源和生態系統造成的負擔。","More demand can put natural systems under stress.",8]
].map(c=>[...c,2,'8lk']);

const grade8LKLesson3 = [
  ["Migration","The permanent or semipermanent relocation of people from one place to another.","遷移：人們從一個地方永久或半永久搬到另一個地方。","Migration is a lasting change of residence.",0],
  ["Immigration","Movement into a new country or location.","移入：進入一個新國家或地區定居。","Immigration means moving in.",1],
  ["Emigration","Movement away from a country or location.","移出：離開一個國家或地區。","Emigration means moving out.",0],
  ["Push Factor","A negative condition that encourages people to leave, such as war, unemployment, drought, or persecution.","推力因素：促使人們離開的負面條件，例如戰爭、失業、乾旱或迫害。","Push factors drive people away.",2],
  ["Pull Factor","A positive condition that attracts people, such as safety, jobs, freedom, or higher wages.","拉力因素：吸引人們前往的正面條件，例如安全、工作、自由或較高工資。","Pull factors attract people toward a place.",3],
  ["Intervening Obstacle","A barrier that makes migration difficult or prevents migrants from reaching their destination.","中間障礙：使遷移變得困難，或阻止移民到達目的地的障礙。","An obstacle stands between origin and destination.",4],
  ["Intervening Opportunity","An attractive opportunity that causes migrants to stop before reaching their original destination.","中間機會：使移民在抵達原定目的地前停下來的吸引因素或機會。","A good opportunity can shorten the original journey.",5],
  ["Economic Migration","Movement mainly caused by jobs, wages, or other financial opportunities.","經濟遷移：主要因工作、工資或其他經濟機會而發生的遷移。","Follow the opportunity to earn a living.",3],
  ["Political Migration","Movement caused by war, persecution, repressive laws, or political instability.","政治遷移：因戰爭、迫害、壓迫性法律或政治不穩定而發生的遷移。","Political danger can force people to move.",7],
  ["Environmental Migration","Movement caused by drought, crop failure, natural disasters, or an extreme climate.","環境遷移：因乾旱、農作歉收、自然災害或極端氣候而發生的遷移。","Environmental change can make a home hard to sustain.",2],
  ["Social or Cultural Migration","Movement influenced by family ties, education, discrimination, religion, or freedom.","社會或文化遷移：受家庭關係、教育、歧視、宗教或自由等因素影響的遷移。","Family, learning, identity, and freedom shape movement.",5],
  ["Asylum","Protection granted by a country to someone who has fled persecution or serious danger.","庇護：一個國家給予逃離迫害或嚴重危險者的保護。","Asylum offers safety from serious danger.",7],
  ["Displaced Person","Someone forced to leave home because of conflict, disaster, or another emergency.","流離失所者：因衝突、災害或其他緊急情況而被迫離開家園的人。","Displaced people are forced from home.",0],
  ["Step Migration","Migration completed through a series of shorter moves instead of one direct move.","階段式遷移：透過一連串較短的移動完成遷移，而非一次直接到達目的地。","Move in steps rather than one long leap.",6],
  ["Counter-migration","Movement in the opposite direction of an earlier migration flow.","反向遷移：與先前遷移流動方向相反的人口移動。","Counter-migration reverses an earlier flow.",8],
  ["Ravenstein's Laws of Migration","General observations about migration, including that most moves are short and many are economically motivated.","雷文斯坦遷移法則：對遷移現象的概括觀察，包括多數遷移距離較短，且許多遷移受經濟因素驅動。","Most moves are short; jobs motivate many moves.",6],
  ["ESPN Factors","A reminder for economic, social, political, and natural or environmental causes and effects.","ESPN 因素：用來記住經濟、社會、政治及自然／環境方面原因與影響的分類方法。","E-S-P-N organizes four kinds of geographic factors.",8]
].map(c=>[...c,3,'8lk']);

const grade8LKLesson4 = [
  ["Receiving Country","The country or place into which migrants move.","接收國：移民遷入的國家或地區。","The receiving country welcomes or receives arrivals.",0],
  ["Country of Origin","The country or place migrants leave.","原籍國：移民離開的國家或地區。","Origin is where the migration begins.",1],
  ["Remittance","Money migrants send to relatives or communities in their country of origin.","匯款：移民寄給原籍國親屬或社區的金錢。","Earnings travel home even when the worker lives abroad.",2],
  ["Brain Drain","The loss of educated or highly trained workers when they emigrate.","人才流失：受過教育或高度專業訓練的工作者移出後，原籍地失去這些人才。","Skills leave along with skilled workers.",3],
  ["Cultural Contribution","Food, language, music, religion, art, traditions, and other cultural features migrants bring.","文化貢獻：移民帶來的食物、語言、音樂、宗教、藝術、傳統及其他文化特色。","Migrants add ideas and traditions to a community.",4],
  ["Demographic Change","A change in a population's size, structure, growth rate, or other characteristics.","人口結構變化：人口數量、組成、成長率或其他特徵的改變。","Demography describes who makes up a population.",5],
  ["Age Composition","The proportion of people in different age groups within a population.","年齡組成：一個人口中不同年齡群所占的比例。","How many people are young, working-age, or older?",5],
  ["Sex Ratio","The number of males compared with the number of females in a population.","性別比：一個人口中男性人數與女性人數的比較。","A ratio compares male and female population numbers.",5],
  ["Dependency Ratio","A comparison of dependents, usually children and older adults, with the working-age population.","扶養比：通常將兒童與老年等依賴人口，和工作年齡人口進行比較。","Compare dependents with working-age supporters.",5],
  ["Population Decline","A decrease that occurs when deaths and emigration exceed births and immigration.","人口減少：當死亡與移出人數超過出生與移入人數時出現的人口下降。","More people leave or die than arrive or are born.",1],
  ["Immigration Restriction","A law or policy that limits who may enter or settle in a country.","移民限制：限制哪些人可以進入或定居於某國的法律或政策。","Restrictions narrow who may enter or stay.",2],
  ["Guest-worker Program","A program allowing people to work temporarily in another country.","客工計畫：允許人們暫時到另一個國家工作的制度。","Work abroad for a limited period.",6],
  ["Family Reunification","A policy allowing migrants to join close family members living in another country.","家庭團聚：允許移民與居住在另一國的近親團聚之政策。","The policy brings close family members together.",7],
  ["Xenophobia","Fear of or hostility toward people from other countries or cultures.","仇外心理：對來自其他國家或文化的人產生恐懼或敵意。","Fear of outsiders can harm communities.",8],
  ["Discrimination","Unfair treatment based on traits such as nationality, ethnicity, religion, or gender.","歧視：因國籍、族群、宗教或性別等特徵而受到不公平待遇。","Different treatment becomes wrong when it is unfair.",8]
].map(c=>[...c,4,'8lk']);

const grade8LKLesson5 = [
  ["Relocation Diffusion","The spread of a cultural trait when people move to a new place and carry the trait with them.","遷移擴散：人們搬到新地方時，把文化特徵一同帶去而形成的傳播。","People move; their culture moves with them.",0],
  ["Expansion Diffusion","The spread of a cultural trait outward from its origin while it remains strong in the original area.","擴展擴散：文化特徵從起源地向外傳播，同時在原來地區仍然保持影響力。","The idea expands without leaving its origin.",1],
  ["Hierarchical Diffusion","The spread of a cultural trait from influential people or important places to other people or places.","階層擴散：文化特徵從有影響力的人物或重要地點，傳播到其他人或地區。","Influential people or places lead the spread.",2],
  ["Contagious Diffusion","The rapid spread of a cultural trait through direct contact from person to person or place to place.","傳染式擴散：文化特徵透過直接接觸，迅速在人與人或地方與地方之間傳播。","It spreads through close contact like a ripple.",3],
  ["Stimulus Diffusion","The spread of an underlying idea when its original form is changed or adapted to fit a new culture.","刺激擴散：一個核心概念傳播到新文化時，其原有形式被改變或調整。","The main idea spreads, but its form adapts.",4],
  ["Assimilation","The process in which a group adopts another culture and loses many of its original cultural traits.","同化：一個群體採納另一種文化，並失去許多原有文化特徵的過程。","New customs replace many original customs.",5],
  ["Acculturation","The process of adopting some traits of another culture while keeping important parts of one's original culture.","文化適應：採納另一種文化的部分特徵，同時保留自身重要文化特色的過程。","Add new traits while keeping key original ones.",6],
  ["Syncretism","The blending of elements from different cultures to create a new cultural practice or tradition.","文化融合：把不同文化的元素結合，形成新的文化習俗或傳統。","Two traditions blend into something new.",7],
  ["Network","A system of people, places, businesses, or communication links that connects communities and helps ideas spread.","網絡：連結人群、地點、企業或通訊管道的系統，能連接社區並促進觀念傳播。","Connections create pathways for interaction.",8]
].map(c=>[...c,5,'8lk']);

const grade8LKLesson6 = [
  ["Regionalization","The process geographers use to divide and categorize space into smaller, meaningful units.","區域化：地理學家把空間劃分並分類成較小且具有意義單位的過程。","Regionalization organizes space into useful parts.",0],
  ["Region","An area defined by one or more common and distinctive traits that make it different from surrounding areas.","區域：由一項或多項共同且獨特的特徵所界定，並與周圍地區有所不同的範圍。","Shared traits make an area a region.",1],
  ["Formal Region","An area with official boundaries or one or more measurable shared characteristics, such as government, language, climate, or economic activity.","形式區域：具有正式邊界，或共享一項以上可衡量特徵的地區，例如政府、語言、氣候或經濟活動。","Formal regions are defined by clear, measurable traits.",2],
  ["Functional Region","An area organized around a node or focal point and connected by an activity, service, or transportation system.","功能區域：圍繞節點或中心點組織，並由活動、服務或交通系統連結的地區。","A central node links the functional region.",3],
  ["Perceptual (Vernacular) Region","An area people believe exists because of shared ideas, identity, experience, or cultural perception.","知覺（通俗）區域：人們基於共同觀念、認同、經驗或文化印象而認為存在的地區。","People's perceptions shape its boundaries.",4],
  ["Corn Belt","A region of the Midwestern United States that has dominated the country's corn production since the 1850s.","玉米帶：美國中西部自1850年代以來主導全國玉米生產的區域。","A shared economic activity defines this agricultural region.",5],
  ["Hinterland","The surrounding area served by an urban center, which provides goods and services for that area.","腹地：由某個城市中心提供服務的周圍地區；該中心為腹地供應商品與服務。","The city is the hub; the hinterland is the area it serves.",6],
  ["Mental Map","A map people create in their minds based on personal experience, knowledge, and perception.","心智地圖：人們根據個人經驗、知識和認知，在腦海中形成的地圖。","Everyone pictures places a little differently.",7],
  ["Overlapping Regional Boundaries","A situation in which one place belongs to two or more regions at the same time.","重疊區域邊界：同一地點同時屬於兩個或更多區域的情況。","One place can fit several regional categories.",8],
  ["Transitional Regional Boundary","A zone without a sharp dividing line that contains characteristics of the regions on both sides.","過渡性區域邊界：沒有明確分界線，並同時具有兩側區域特徵的地帶。","Traits gradually blend across a transition zone.",1],
  ["Contested Regional Boundary","A regional boundary whose location or ownership is disputed by different groups or governments.","爭議性區域邊界：其位置或歸屬受到不同群體或政府爭議的區域邊界。","Different groups disagree about where the region belongs.",8]
].map(c=>[...c,6,'8lk']);

const grade8LKCards=[...grade8LKLesson1,...grade8LKLesson2,...grade8LKLesson3,...grade8LKLesson4,...grade8LKLesson5,...grade8LKLesson6];
