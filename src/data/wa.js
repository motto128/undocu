import React from 'react';
import {SelectField} from 'react-mdl-extra';
//top level Navbar for the app
class City extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {};
    //this.channelName
  }




render() {
   
    return (
<SelectField label={'City'} value={this.state.eventCity} onChange={(e) => this.handleECity(e)}>
<option value="0"> Aberdeen </option>
<option value="1"> Acme </option>
<option value ="2"> Addy </option>
<option value ="3"> Adna </option>
<option value ="4"> Airway Heights </option>
<option value ="5"> Almira </option>
<option value ="6"> Amanda Park </option>
<option value ="7"> Anacortes </option>
<option value ="8"> Anatone </option>
<option value ="9"> Arlington </option>
<option value ="10"> Asotin </option>
<option value ="11"> Auburn </option>
<option value ="12"> Bainbridge Island </option>
<option value ="13"> Battle Ground </option>
<option value ="14"> Belfair </option>
<option value ="15"> Bellevue </option>
<option value ="16"> Bellingham </option>
<option value ="17"> Benge </option>
<option value ="18"> Benton City </option>
<option value ="19"> Bickleton </option>
<option value ="20"> Bingen </option>
<option value ="21"> Black Diamond </option>
<option value ="22"> Blaine </option>
<option value ="23"> Bothell </option>
<option value ="24"> Bow </option>
<option value ="25"> Bremerton </option>
<option value ="26"> Brewster </option>
<option value ="27"> Bridgeport </option>
<option value ="28"> Brinnon </option>
<option value ="29"> Brush Prairie </option>
<option value ="30"> Buckley </option>
<option value ="31"> Buena </option>
<option value ="32"> Burbank </option>
<option value ="33"> Burlington </option>
<option value ="34"> Camas </option>
<option value ="35"> Carbonado </option>
<option value ="36"> Carnation </option>
<option value ="37"> Cashmere </option>
<option value ="38"> Castle Rock </option>
<option value ="39"> Cathlamet </option>
<option value ="40"> Centerville </option>
<option value ="41"> Centralia </option>
<option value ="42"> Chehalis </option>
<option value ="43"> Chelan </option>
<option value ="44"> Cheney </option>
<option value ="45"> Chewelah </option>
<option value ="46"> Chimacum </option>
<option value ="47"> Clarkston </option>
<option value ="48"> Cle Elum </option>
<option value ="49"> Clear Lake </option>
<option value ="50"> Clinton </option>
<option value ="51"> Colfax </option>
<option value ="52"> College Place </option>
<option value ="53"> Colton </option>
<option value ="54"> Colville </option>
<option value ="55"> Concrete </option>
<option value ="56"> Connell </option>
<option value ="57"> Conway </option>
<option value ="58"> Cosmopolis </option>
<option value ="59"> Coulee City </option>
<option value ="60"> Coulee Dam </option>
<option value ="61"> Coupeville </option>
<option value ="62"> Cowiche </option>
<option value ="63"> Creston </option>
<option value ="64"> Curlew </option>
<option value ="65"> Cusick </option>
<option value ="66"> Custer </option>
<option value ="67"> Dallesport </option>
<option value ="68"> Danville </option>
<option value ="69"> Darrington </option>
<option value ="70"> Davenport </option>
<option value ="71"> Dayton </option>
<option value ="72"> Deer Park </option>
<option value ="73"> Deming </option>
<option value ="74"> Dixie </option>
<option value ="75"> DuPont </option>
<option value ="76"> Duvall </option>
<option value ="77"> East Wenatchee </option>
<option value ="78"> Easton </option>
<option value ="79"> Eatonville </option>
<option value ="80"> Edmonds </option>
<option value ="81"> Ellensburg </option>
<option value ="82"> Elma </option>
<option value ="83"> Endicott </option>
<option value ="84"> Entiat </option>
<option value ="85"> Enumclaw </option>
<option value ="86"> Ephrata </option>
<option value ="87"> Everett </option>
<option value ="88"> Everson </option>
<option value ="89"> Fairchild Air Force Base </option>
<option value ="90"> Fairfield </option>
<option value ="91"> Fall City </option>
<option value ="92"> Federal Way </option>
<option value ="93"> Ferndale </option>
<option value ="94"> Forks </option>
<option value ="95"> Freeland </option>
<option value ="96"> Friday Harbor </option>
<option value ="97"> Garfield </option>
<option value ="98"> George </option>
<option value ="99"> Gig Harbor </option>
<option value ="100"> Gold Bar </option>
<option value ="101"> Goldendale </option>
<option value ="102"> Graham </option>
<option value ="103"> Grand Coulee </option>
<option value ="104"> Grandview </option>
<option value ="105"> Granger </option>
<option value ="106"> Granite Falls </option>
<option value ="107"> Greenbank </option>
<option value ="108"> Hamilton </option>
<option value ="109"> Harrington </option>
<option value ="110"> Hartline </option>
<option value ="111"> Hay </option>
<option value ="112"> Hoodsport </option>
<option value ="113"> Hoquiam </option>
<option value ="114"> Hunters </option>
<option value ="115"> Ilwaco </option>
<option value ="116"> Inchelium </option>
<option value ="117"> Index </option>
<option value ="118"> Issaquah </option>
<option value ="119"> Joyce </option>
<option value ="120"> Kahlotus </option>
<option value ="121"> Kalama </option>
<option value ="122"> Keller </option>
<option value ="123"> Kelso </option>
<option value ="124"> Kenmore </option>
<option value ="125"> Kennewick </option>
<option value ="126"> Kent </option>
<option value ="127"> Kettle Falls </option>
<option value ="128"> Keyport </option>
<option value ="129"> Kingston </option>
<option value ="130"> Kirkland </option>
<option value ="131"> Kittitas </option>
<option value ="132"> La Center </option>
<option value ="133"> La Conner </option>
<option value ="134"> La Push </option>
<option value ="135"> Lacey </option>
<option value ="136"> LaCrosse </option>
<option value ="137"> Lake Stevens </option>
<option value ="138"> Lakewood </option>
<option value ="139"> Lamont </option>
<option value ="140"> Langley </option>
<option value ="141"> Leavenworth </option>
<option value ="142"> Liberty Lake </option>
<option value ="143"> Lind </option>
<option value ="144"> Long Beach </option>
<option value ="145"> Longview </option>
<option value ="146"> Lopez Island </option>
<option value ="147"> Lummi Island </option>
<option value ="148"> Lyle </option>
<option value ="149"> Lynden </option>
<option value ="150"> Lynnwood </option>
<option value ="151"> Mabton </option>
<option value ="152"> Manchester </option>
<option value ="153"> Mansfield </option>
<option value ="154"> Manson </option>
<option value ="155"> Maple Falls </option>
<option value ="156"> Maple Valley </option>
<option value ="157"> Marysville </option>
<option value ="158"> Mattawa </option>
<option value ="159"> McCleary </option>
<option value ="160"> McKenna </option>
<option value ="161"> Mead </option>
<option value ="162"> Medical Lake </option>
<option value ="163"> Medina </option>
<option value ="164"> Menlo </option>
<option value ="165"> Mercer Island </option>
<option value ="166"> Milton </option>
<option value ="167"> Monroe </option>
<option value ="168"> Montesano </option>
<option value ="169"> Morton </option>
<option value ="170"> Moses Lake </option>
<option value ="171"> Mossyrock </option>
<option value ="172"> Mount Vernon </option>
<option value ="173"> Mountlake Terrace </option>
<option value ="174"> Moxee </option>
<option value ="175"> Mukilteo </option>
<option value ="176"> Naches </option>
<option value ="177"> Napavine </option>
<option value ="178"> Naselle </option>
<option value ="179"> Nespelem </option>
<option value ="180"> Newman Lake </option>
<option value ="181"> Newport </option>
<option value ="182"> Nine Mile Falls </option>
<option value ="183"> Nooksack </option>
<option value ="184"> North Bend </option>
<option value ="185"> Oak Harbor </option>
<option value ="186"> Oakesdale </option>
<option value ="187"> Oakville </option>
<option value ="188"> Ocean Park </option>
<option value ="189"> Ocean Shores </option>
<option value ="190"> Odessa </option>
<option value ="191"> Okanogan </option>
<option value ="192"> Olalla </option>
<option value ="193"> Olympia </option>
<option value ="194"> Omak </option>
<option value ="195"> Onalaska </option>
<option value ="196"> Orient </option>
<option value ="197"> Orondo </option>
<option value ="198"> Oroville </option>
<option value ="199"> Orting </option>
<option value ="200"> Othello </option>
<option value ="201"> Pacific </option>
<option value ="202"> Palisades </option>
<option value ="203"> Palouse </option>
<option value ="204"> Parker </option>
<option value ="205"> Pasco </option>
<option value ="206"> Paterson </option>
<option value ="207"> Pe Ell </option>
<option value ="208"> Point Roberts </option>
<option value ="209"> Pomeroy </option>
<option value ="210"> Port Angeles </option>
<option value ="211"> Port Hadlock-Irondale </option>
<option value ="212"> Port Ludlow </option>
<option value ="213"> Port Orchard </option>
<option value ="214"> Port Townsend </option>
<option value ="215"> Poulsbo </option>
<option value ="216"> Prescott </option>
<option value ="217"> Preston </option>
<option value ="218"> Prosser </option>
<option value ="219"> Pullman </option>
<option value ="220"> Puyallup </option>
<option value ="221"> Quilcene </option>
<option value ="222"> Quincy </option>
<option value ="223"> Rainier </option>
<option value ="224"> Randle </option>
<option value ="225"> Raymond </option>
<option value ="226"> Redmond </option>
<option value ="227"> Renton </option>
<option value ="228"> Republic </option>
<option value ="229"> Rice </option>
<option value ="230"> Richland </option>
<option value ="231"> Ridgefield </option>
<option value ="232"> Ritzville </option>
<option value ="233"> Riverside </option>
<option value ="234"> Rochester </option>
<option value ="235"> Rockford </option>
<option value ="236"> Roosevelt </option>
<option value ="237"> Rosalia </option>
<option value ="238"> Roslyn </option>
<option value ="239"> Roy </option>
<option value ="240"> Royal City </option>
<option value ="241"> Salkum </option>
<option value ="242"> Sammamish </option>
<option value ="243"> Satsop </option>
<option value ="244"> Seattle </option>
<option value ="245"> Sedro-Woolley </option>
<option value ="246"> Sekiu </option>
<option value ="247"> Selah </option>
<option value ="248"> Sequim </option>
<option value ="249"> Shaw Island </option>
<option value ="250"> Shelton </option>
<option value ="251"> Silverdale </option>
<option value ="252"> Silver Lake </option>
<option value ="253"> Snohomish </option>
<option value ="254"> Snoqualmie </option>
<option value ="255"> Snoqualmie Pass </option>
<option value ="256"> South Bend </option>
<option value ="257"> Southworth </option>
<option value ="258"> Spanaway </option>
<option value ="259"> Spangle </option>
<option value ="260"> Spokane </option>
<option value ="261"> Sprague </option>
<option value ="262"> Springdale </option>
<option value ="263"> Saint John </option>
<option value ="264"> Stanwood </option>
<option value ="265"> Starbuck </option>
<option value ="266"> Steilacoom </option>
<option value ="267"> Steptoe </option>
<option value ="268"> Stevenson </option>
<option value ="269"> Sultan </option>
<option value ="270"> Sumas </option>
<option value ="271"> Sumner </option>
<option value ="272"> Sunnyside </option>
<option value ="273"> Tacoma </option>
<option value ="274"> Taholah </option>
<option value ="275"> Tekoa </option>
<option value ="276"> Tenino </option>
<option value ="277"> Toledo </option>
<option value ="278"> Tonasket </option>
<option value ="279"> Toppenish </option>
<option value ="280"> Touchet </option>
<option value ="281"> Toutle </option>
<option value ="282"> Tracyton </option>
<option value ="283"> Trout Lake </option>
<option value ="284"> Tumwater </option>
<option value ="285"> Twisp </option>
<option value ="286"> Union </option>
<option value ="287"> University Place </option>
<option value ="288"> Valley </option>
<option value ="289"> Valleyford </option>
<option value ="290"> Vancouver </option>
<option value ="291"> Vashon </option>
<option value ="292"> Waitsburg </option>
<option value ="293"> Walla Walla </option>
<option value ="294"> Wapato </option>
<option value ="295"> Warden </option>
<option value ="296"> Washougal </option>
<option value ="297"> Washtucna </option>
<option value ="298"> Waterville </option>
<option value ="299"> Wellpinit </option>
<option value ="300"> Wenatchee </option>
<option value ="301"> Westport </option>
<option value ="302"> White Swan </option>
<option value ="303"> Wilbur </option>
<option value ="304"> Wilkeson </option>
<option value ="305"> Winlock </option>
<option value ="306"> Winthrop </option>
<option value ="307"> Wishram </option>
<option value ="308"> Woodinville </option>
<option value ="309"> Woodland </option>
<option value ="310"> Yakima </option>
<option value ="311"> Yelm </option>
<option value ="312"> Zillah </option>
<option value ="313"> Alderwood Manor </option>
<option value ="314"> Artondale </option>
<option value ="315"> Bonney Lake </option>
<option value ="316"> Burien </option>
<option value ="317"> Camano Island </option>
<option value ="318"> Cascade-Fairwood </option>
<option value ="319"> Cottage Lake </option>
<option value ="320"> Country Homes </option>
<option value ="321"> Covington </option>
<option value ="322"> Des Moines </option>
<option value ="323"> East Hill-Meridian </option>
<option value ="324"> East Renton Highlands </option>
<option value ="325"> Edgewood </option>
<option value ="326"> Elk Plain </option>
<option value ="327"> Fife </option>
<option value ="328"> Five Corners </option>
<option value ="329"> Hazel Dell North </option>
<option value ="330"> Inglewood-Finn Hill </option>
<option value ="331"> Lakeland North </option>
<option value ="332"> Maltby </option>
<option value ="333"> Martha Lake </option>
<option value ="334"> Mill Creek </option>
<option value ="335"> Mirrormont </option>
<option value ="336"> North Creek </option>
<option value ="337"> Paine Field-Lake Stickney </option>
<option value ="338"> Parkland </option>
<option value ="339"> Parkwood </option>
<option value ="340"> Picnic Point-North Lynnwood </option>
<option value ="341"> Salmon Creek </option>
<option value ="342"> SeaTac </option>
<option value ="343"> Shoreline </option>
<option value ="344"> South Hill </option>
<option value ="345"> Spokane Valley </option>
<option value ="346"> Three Lakes </option>
<option value="347"> Tukwila </option>
<option value="348"> Union Hill-Novelty Hill </option>
<option value="349"> West Richland </option>
<option value="350"> White Center </option>
<option value="351"> White Salmon </option>
</SelectField>
);
}
}
export default City;