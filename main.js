const startWord = "COLD";
const endWord = "HEAT";
const validWords = ["AAHS","AALS","ABAS","ABBA","ABBE","ABED","ABET","ABLE","ABLY","ABRI","ABUT","ABYE","ABYS","ACAI","ACED","ACES","ACHE","ACHY","ACID","ACME","ACNE","ACRE","ACRO","ACTA","ACTS","ACYL","ADDS","ADIT","ADOS","ADZE","AEON","AERO","AERY","AFAR","AFRO","AGAR","AGAS","AGED","AGEE","AGER","AGES","AGHA","AGIN","AGIO","AGLU","AGLY","AGMA","AGOG","AGON","AGRO","AGUE","AHED","AHEM","AHIS","AHOY","AIDE","AIDS","AILS","AIMS","AINS","AIRN","AIRS","AIRT","AIRY","AITS","AJAR","AJEE","AJIS","AKEE","AKIN","ALAE","ALAN","ALAR","ALAS","ALBA","ALBS","ALEC","ALEE","ALEF","ALES","ALFA","ALGA","ALIF","ALIT","ALKY","ALLS","ALLY","ALMA","ALME","ALMS","ALOE","ALOW","ALPS","ALSO","ALTO","ALTS","ALUM","AMAH","AMAS","AMBO","AMEN","AMIA","AMID","AMIE","AMIN","AMIR","AMIS","AMMO","AMOK","AMPS","AMUS","AMYL","ANAL","ANAS","ANDS","ANES","ANEW","ANGA","ANIL","ANIS","ANKH","ANNA","ANOA","ANON","ANSA","ANTA","ANTE","ANTI","ANTS","ANUS","APED","APER","APES","APEX","APOD","APOS","APPS","APSE","AQUA","ARAK","ARBS","ARCH","ARCO","ARCS","AREA","AREG","ARES","ARFS","ARGH","ARIA","ARID","ARIE","ARIL","ARKS","ARMS","ARMY","AROS","ARTS","ARTY","ARUM","ARVO","ARYL","ASCI","ASEA","ASHY","ASKS","ASPS","ATAP","ATES","ATMA","ATOM","ATOP","AUGH","AUKS","AULD","AUNT","AURA","AUTO","AVER","AVES","AVID","AVOS","AVOW","AWAY","AWED","AWEE","AWES","AWLS","AWNS","AWNY","AWOL","AWRY","AXAL","AXED","AXEL","AXES","AXIL","AXIS","AXLE","AXON","AYAH","AYES","AYIN","AZAN","BAAL","BAAS","BABA","BABE","BABU","BABY","BACH","BACK","BADE","BADS","BAES","BAFF","BAGS","BAHT","BAIL","BAIT","BAKE","BALD","BALE","BALK","BALL","BALM","BALS","BAMS","BANC","BAND","BANE","BANG","BANI","BANK","BANS","BAPS","BARB","BARD","BARE","BARF","BARK","BARM","BARN","BARS","BASE","BASH","BASK","BASS","BAST","BATE","BATH","BATS","BATT","BAUD","BAWD","BAWK","BAWL","BAWN","BAYS","BAZZ","BEAD","BEAK","BEAL","BEAM","BEAN","BEAR","BEAT","BEAU","BECK","BEDS","BEDU","BEEF","BEEN","BEEP","BEER","BEES","BEET","BEGS","BELL","BELS","BELT","BEMA","BEND","BENE","BENS","BENT","BERG","BERK","BERM","BEST","BETA","BETH","BETS","BEVY","BEYS","BHUT","BIAS","BIBB","BIBE","BIBS","BICE","BIDE","BIDI","BIDS","BIER","BIFF","BIGS","BIKE","BILE","BILK","BILL","BIMA","BIND","BINE","BING","BINS","BIOG","BIOS","BIRD","BIRK","BIRL","BIRR","BISE","BISH","BISK","BITE","BITS","BITT","BIZE","BLAB","BLAE","BLAG","BLAH","BLAM","BLAT","BLAW","BLEB","BLED","BLET","BLEW","BLIN","BLIP","BLOB","BLOC","BLOG","BLOT","BLOW","BLUB","BLUE","BLUR","BOAR","BOAS","BOAT","BOBO","BOBS","BOCK","BODE","BODS","BODY","BOFF","BOGS","BOGY","BOHO","BOIL","BOLA","BOLD","BOLE","BOLL","BOLO","BOLT","BOMB","BOND","BONE","BONG","BONK","BONY","BOOB","BOOK","BOOM","BOON","BOOR","BOOS","BOOT","BOPS","BORA","BORE","BORK","BORN","BORT","BOSH","BOSK","BOSS","BOTA","BOTH","BOTS","BOTT","BOUT","BOWL","BOWS","BOXY","BOYO","BOYS","BOZO","BRAD","BRAE","BRAG","BRAN","BRAS","BRAT","BRAW","BRAY","BRED","BREE","BREN","BREW","BRIE","BRIG","BRIM","BRIN","BRIO","BRIS","BRIT","BROO","BROS","BROW","BRRR","BRUT","BRUX","BUBO","BUBS","BUBU","BUCK","BUDS","BUFF","BUGS","BUHL","BUHR","BULB","BULK","BULL","BUMF","BUMP","BUMS","BUNA","BUND","BUNG","BUNK","BUNN","BUNS","BUNT","BUOY","BURA","BURB","BURD","BURG","BURK","BURL","BURN","BURP","BURR","BURS","BURY","BUSH","BUSK","BUSS","BUST","BUSY","BUTE","BUTS","BUTT","BUYS","BUZZ","BYES","BYRE","BYRL","BYTE","CABS","CACA","CADE","CADI","CADS","CAFE","CAFF","CAFS","CAGE","CAGY","CAID","CAIN","CAKE","CAKY","CALF","CALK","CALL","CALM","CALO","CALX","CAME","CAMI","CAMO","CAMP","CAMS","CANE","CANS","CANT","CAPE","CAPH","CAPO","CAPS","CARB","CARD","CARE","CARK","CARL","CARN","CARP","CARR","CARS","CART","CASA","CASE","CASH","CASK","CAST","CATE","CATH","CATS","CAUL","CAVA","CAVE","CAVY","CAWS","CAYS","CAZH","CECA","CEDE","CEDI","CEES","CEIL","CELL","CELS","CELT","CENT","CEPE","CEPS","CERE","CERO","CERT","CESS","CETE","CHAD","CHAI","CHAM","CHAO","CHAP","CHAR","CHAT","CHAW","CHAY","CHEF","CHEM","CHEW","CHEZ","CHIA","CHIC","CHID","CHIN","CHIP","CHIS","CHIT","CHOC","CHON","CHOP","CHOW","CHUB","CHUG","CHUM","CIAO","CIGS","CINE","CINQ","CION","CIRE","CIST","CITE","CITY","CLAD","CLAG","CLAM","CLAN","CLAP","CLAW","CLAY","CLEF","CLEG","CLEW","CLIP","CLOD","CLOG","CLON","CLOP","CLOT","CLOY","CLUB","CLUE","COAL","COAT","COAX","COBB","COBS","COCA","COCK","COCO","CODA","CODE","CODS","COED","COFF","COFT","COGS","COHO","COIF","COIL","COIN","COIR","COKE","COKY","COLA","COLD","COLE","COLS","COLT","COLY","COMA","COMB","COME","COMM","COMP","CONE","CONI","CONK","CONN","CONS","CONY","COOF","COOK","COOL","COON","COOP","COOS","COOT","COPE","COPS","COPY","CORD","CORE","CORF","CORK","CORM","CORN","CORS","CORY","COSH","COSS","COST","COSY","COTE","COTS","COUP","COVE","COWL","COWS","COWY","COXA","COYS","COZY","CRAB","CRAG","CRAM","CRAP","CRAW","CRED","CREW","CRIA","CRIB","CRIS","CRIT","CROC","CROP","CROW","CRUD","CRUS","CRUX","CUBE","CUBS","CUDS","CUED","CUES","CUFF","CUIF","CUKE","CULL","CULM","CULT","CUPS","CURB","CURD","CURE","CURF","CURL","CURN","CURR","CURS","CURT","CUSK","CUSP","CUSS","CUTE","CUTS","CWMS","CYAN","CYMA","CYME","CYST","CZAR","DABS","DACE","DADA","DADO","DADS","DAFF","DAFT","DAGS","DAHL","DAHS","DAIS","DAKS","DALE","DALS","DAME","DAMN","DAMP","DAMS","DANG","DANK","DANS","DAPS","DARB","DARE","DARK","DARN","DART","DASH","DATA","DATE","DATO","DAUB","DAUT","DAVY","DAWK","DAWN","DAWS","DAWT","DAYS","DAZE","DEAD","DEAF","DEAL","DEAN","DEAR","DEBS","DEBT","DECK","DECO","DEED","DEEM","DEEP","DEER","DEES","DEET","DEFI","DEFT","DEFY","DEIL","DEKE","DELE","DELF","DELI","DELL","DELS","DELT","DEME","DEMO","DEMY","DENE","DENI","DENS","DENT","DENY","DEPS","DERE","DERM","DESI","DESK","DEVA","DEVI","DEVS","DEWS","DEWY","DEXY","DEYS","DHAK","DHAL","DHOW","DIAL","DIBS","DICE","DICK","DIDO","DIDY","DIED","DIEL","DIES","DIET","DIFF","DIFS","DIGS","DIKE","DILL","DIME","DIMS","DINE","DING","DINK","DINO","DINS","DINT","DIOL","DIPS","DIPT","DIRE","DIRK","DIRL","DIRT","DISC","DISH","DISK","DISS","DITA","DITE","DITS","DITZ","DIVA","DIVE","DJIN","DOAT","DOBE","DOBY","DOCK","DOCS","DODO","DOER","DOES","DOFF","DOGE","DOGS","DOGY","DOHS","DOIT","DOJO","DOLE","DOLL","DOLS","DOLT","DOME","DOMS","DONA","DONE","DONG","DONS","DOOB","DOOM","DOOR","DOPA","DOPE","DOPY","DORE","DORK","DORM","DORP","DORR","DORS","DORY","DOSA","DOSE","DOSH","DOSS","DOST","DOTE","DOTH","DOTS","DOTY","DOUM","DOUR","DOUT","DOUX","DOVE","DOWN","DOWS","DOXX","DOXY","DOZE","DOZY","DRAB","DRAG","DRAM","DRAT","DRAW","DRAY","DREE","DREG","DREK","DREW","DRIB","DRIP","DROP","DRUB","DRUG","DRUM","DRYS","DUAD","DUAL","DUBS","DUCE","DUCI","DUCK","DUCT","DUDE","DUDS","DUEL","DUES","DUET","DUFF","DUGS","DUIT","DUKE","DULL","DULY","DUMA","DUMB","DUMP","DUNE","DUNG","DUNK","DUNS","DUNT","DUOS","DUPE","DUPS","DURA","DURE","DURN","DURO","DURR","DUSK","DUST","DUTY","DYAD","DYED","DYER","DYES","DYKE","DYNE","EACH","EARL","EARN","EARS","EASE","EAST","EASY","EATH","EATS","EAUX","EAVE","EBBS","EBON","ECHE","ECHO","ECHT","ECOS","ECRU","ECUS","EDDO","EDDY","EDGE","EDGY","EDHS","EDIT","EEEW","EELS","EELY","EERY","EFFS","EFTS","EGAD","EGAL","EGER","EGGS","EGGY","EGIS","EGOS","EIDE","EKED","EKES","EKKA","ELAN","ELDS","ELHI","ELKS","ELLS","ELMS","ELMY","ELSE","EMES","EMEU","EMIC","EMIR","EMIT","EMOS","EMUS","EMYD","ENDS","ENGS","ENOL","ENOW","ENVY","EONS","EPEE","EPHA","EPIC","EPOS","ERAS","ERGO","ERGS","ERNE","ERNS","EROS","ERRS","ERST","ERUV","ESES","ESNE","ESPY","ESSE","ESTS","ETAS","ETCH","ETHS","ETIC","ETNA","ETUI","EURO","EVEN","EVER","EVES","EVIL","EWER","EWES","EXAM","EXEC","EXED","EXES","EXIT","EXON","EXPO","EYAS","EYED","EYEN","EYER","EYES","EYNE","EYRA","EYRE","EYRY","FABS","FACE","FACT","FADE","FADO","FADS","FAFF","FAHS","FAIL","FAIN","FAIR","FAKE","FALL","FALX","FAME","FAMS","FANE","FANG","FANO","FANS","FARD","FARE","FARL","FARM","FARO","FASH","FAST","FATE","FATS","FAUN","FAUX","FAVA","FAVE","FAVS","FAWN","FAYS","FAZE","FEAL","FEAR","FEAT","FECK","FEDS","FEEB","FEED","FEEL","FEES","FEET","FEHS","FELL","FELT","FEME","FEND","FENS","FEOD","FERE","FERN","FESS","FEST","FETA","FETE","FETS","FEUD","FEUS","FIAR","FIAT","FIBS","FICE","FICO","FIDO","FIDS","FIEF","FIFE","FIGS","FILA","FILE","FILK","FILL","FILM","FILO","FILS","FIND","FINE","FINK","FINO","FINS","FIRE","FIRM","FIRN","FIRS","FISC","FISH","FIST","FITS","FIVE","FIXT","FIZZ","FLAB","FLAG","FLAK","FLAM","FLAN","FLAP","FLAT","FLAW","FLAX","FLAY","FLEA","FLED","FLEE","FLEW","FLEX","FLEY","FLIC","FLIP","FLIR","FLIT","FLOC","FLOE","FLOG","FLOP","FLOW","FLUB","FLUE","FLUS","FLUX","FOAL","FOAM","FOBS","FOCI","FOES","FOGS","FOGY","FOHN","FOIL","FOIN","FOLD","FOLK","FOLX","FOND","FONS","FONT","FOOD","FOOL","FOOS","FOOT","FOPS","FORA","FORB","FORD","FORE","FORK","FORM","FORT","FOSS","FOUL","FOUR","FOWL","FOXY","FOYS","FOZY","FRAE","FRAG","FRAP","FRAT","FRAY","FREE","FRET","FRIG","FRIT","FRIZ","FROE","FROG","FROM","FROW","FRUG","FUBS","FUCI","FUDS","FUEL","FUGS","FUGU","FUJI","FULL","FUME","FUMY","FUND","FUNK","FUNS","FURL","FURS","FURY","FUSE","FUSS","FUTZ","FUZE","FUZZ","FYCE","FYKE","GABS","GABY","GACH","GADI","GADS","GAED","GAEN","GAES","GAFF","GAGA","GAGE","GAGS","GAIN","GAIT","GALA","GALE","GALL","GALS","GAMA","GAMB","GAME","GAMP","GAMS","GAMY","GANE","GANG","GANK","GAOL","GAPE","GAPS","GAPY","GARB","GARS","GASH","GASP","GAST","GATE","GATS","GAUD","GAUM","GAUN","GAUR","GAVE","GAWK","GAWP","GAYS","GAZE","GEAR","GECK","GEDS","GEED","GEEK","GEES","GEEZ","GELD","GELS","GELT","GEMS","GENE","GENS","GENT","GENU","GERM","GEST","GETA","GETS","GEUM","GHAT","GHEE","GHIS","GIBE","GIBS","GIDS","GIED","GIEN","GIES","GIFS","GIFT","GIGA","GIGS","GILD","GILL","GILT","GIMP","GINK","GINS","GIRD","GIRL","GIRN","GIRO","GIRT","GIST","GITE","GITS","GIVE","GLAD","GLAM","GLED","GLEE","GLEG","GLEN","GLEY","GLIA","GLIB","GLIM","GLOB","GLOM","GLOP","GLOW","GLUE","GLUG","GLUM","GLUT","GNAR","GNAT","GNAW","GNUS","GOAD","GOAL","GOAS","GOAT","GOBO","GOBS","GOBY","GODS","GOER","GOES","GOGO","GOJI","GOLD","GOLF","GONE","GONG","GOOD","GOOF","GOOK","GOON","GOOP","GOOS","GORE","GORM","GORP","GORY","GOSH","GOTH","GOUT","GOWD","GOWK","GOWN","GRAB","GRAD","GRAM","GRAN","GRAT","GRAY","GREE","GREW","GREY","GRID","GRIG","GRIM","GRIN","GRIP","GRIT","GRIZ","GROG","GROK","GROT","GROW","GRUB","GRUE","GRUM","GUAC","GUAN","GUAR","GUCK","GUDE","GUFF","GUID","GULF","GULL","GULP","GULS","GUMS","GUNK","GUNS","GURU","GUSH","GUST","GUTS","GUVS","GUYS","GYBE","GYMS","GYNO","GYPO","GYRE","GYRI","GYRO","GYVE","HAAF","HAAR","HABU","HACK","HADE","HADJ","HAED","HAEM","HAEN","HAES","HAET","HAFT","HAGS","HAHA","HAHS","HAIK","HAIL","HAIR","HAJI","HAJJ","HAKE","HAKU","HALE","HALF","HALL","HALM","HALO","HALT","HAME","HAMS","HAND","HANG","HANK","HANT","HAPS","HARD","HARE","HARK","HARL","HARM","HARP","HART","HASH","HASP","HAST","HATE","HATH","HATS","HAUL","HAUT","HAVE","HAWK","HAWS","HAYS","HAZE","HAZY","HEAD","HEAL","HEAP","HEAR","HEAT","HECK","HEED","HEEL","HEFT","HEHS","HEIL","HEIR","HELD","HELL","HELM","HELO","HELP","HEME","HEMP","HEMS","HENS","HENT","HEPS","HERB","HERD","HERE","HERL","HERM","HERN","HERO","HERS","HEST","HETH","HETS","HEWN","HEWS","HICK","HIDE","HIED","HIES","HIGH","HIKE","HILA","HILI","HILL","HILT","HIMS","HIND","HINS","HINT","HIPS","HIRE","HISN","HISS","HIST","HITS","HIVE","HIYA","HOAR","HOAX","HOBO","HOBS","HOCK","HODS","HOED","HOER","HOES","HOGG","HOGS","HOKE","HOLD","HOLE","HOLK","HOLM","HOLO","HOLP","HOLS","HOLT","HOLY","HOMA","HOME","HOMO","HOMS","HOMY","HONE","HONG","HONK","HONS","HOOD","HOOF","HOOK","HOOP","HOOT","HOPE","HOPS","HORA","HORK","HORN","HOSE","HOSS","HOST","HOTS","HOUR","HOVE","HOWE","HOWF","HOWK","HOWL","HOWS","HOYA","HOYS","HUBS","HUCK","HUED","HUES","HUFF","HUGE","HUGS","HUIC","HULA","HULK","HULL","HUMP","HUMS","HUNG","HUNH","HUNK","HUNS","HUNT","HURL","HURT","HUSH","HUSK","HUTS","HWAN","HWYL","HYLA","HYMN","HYPE","HYPO","HYPS","HYTE","IAMB","IBEX","IBIS","ICED","ICES","ICHS","ICKS","ICKY","ICON","IDEA","IDEM","IDES","IDLE","IDLY","IDOL","IDYL","IFFY","IGGS","IGLU","IKAT","IKON","ILEA","ILEX","ILIA","ILKA","ILKS","ILLS","ILLY","IMAM","IMID","IMMY","IMPI","IMPS","INBY","INCH","INFO","INIA","INKS","INKY","INLY","INNS","INRO","INTI","INTO","IONS","IOTA","IRED","IRES","IRID","IRIS","IRKS","IRON","ISBA","ISLE","ISMS","ITCH","ITEM","IWIS","IXIA","IZAR","JABS","JACK","JADE","JAGG","JAGS","JAIL","JAKE","JAMB","JAMS","JANE","JAPE","JARL","JARS","JATO","JAUK","JAUP","JAVA","JAWS","JAYS","JAZZ","JEAN","JEDI","JEED","JEEP","JEER","JEES","JEEZ","JEFE","JEHU","JELL","JEON","JERK","JESS","JEST","JETE","JETS","JEUX","JIAO","JIBB","JIBE","JIBS","JIFF","JIGS","JILL","JILT","JIMP","JINK","JINN","JINS","JINX","JIRD","JIVE","JIVY","JOBS","JOCK","JOES","JOEY","JOGS","JOHN","JOIN","JOKE","JOKY","JOLE","JOLT","JOOK","JOSH","JOSS","JOTA","JOTS","JOUK","JOWL","JOWS","JOYS","JUBA","JUBE","JUCO","JUDO","JUDY","JUGA","JUGS","JUJU","JUKE","JUKU","JUMP","JUNK","JUPE","JURA","JURY","JUST","JUTE","JUTS","KAAS","KABS","KADI","KAES","KAFS","KAGU","KAIF","KAIL","KAIN","KAKA","KAKI","KALE","KAME","KAMI","KANA","KANE","KAON","KAPA","KAPH","KAPU","KARN","KART","KATA","KATS","KAVA","KAYO","KAYS","KBAR","KEAS","KECK","KEEF","KEEK","KEEL","KEEN","KEEP","KEET","KEFS","KEGS","KEIR","KELP","KELT","KEMP","KENO","KENS","KENT","KEPI","KEPS","KEPT","KERB","KERF","KERN","KETA","KETO","KEYS","KHAF","KHAN","KHAT","KHET","KHIS","KIBE","KICK","KIDS","KIEF","KIER","KIFS","KILL","KILN","KILO","KILT","KINA","KIND","KINE","KING","KINK","KINO","KINS","KIPS","KIRK","KIRN","KIRS","KISS","KIST","KITE","KITH","KITS","KIVA","KIWI","KLIK","KNAP","KNAR","KNEE","KNEW","KNIT","KNOB","KNOP","KNOT","KNOW","KNUR","KOAN","KOAS","KOBO","KOBS","KOEL","KOHL","KOIS","KOJI","KOLA","KOLO","KONK","KOOK","KOPH","KOPS","KORA","KORE","KORS","KOSS","KOTO","KRAI","KRAY","KRIS","KUDO","KUDU","KUES","KUFI","KUNA","KUNE","KURU","KVAS","KYAK","KYAR","KYAT","KYES","KYTE","LABS","LACE","LACK","LACS","LACY","LADE","LADS","LADY","LAGS","LAHS","LAIC","LAID","LAIN","LAIR","LAKE","LAKH","LAKY","LALL","LAMA","LAMB","LAME","LAMP","LAMS","LAND","LANE","LANG","LANK","LAPS","LARD","LARI","LARK","LARN","LARS","LASE","LASH","LASS","LAST","LATE","LATH","LATI","LATS","LATU","LAUD","LAVA","LAVE","LAVS","LAWN","LAWS","LAYS","LAZE","LAZY","LEAD","LEAF","LEAK","LEAL","LEAN","LEAP","LEAR","LEAS","LECH","LEDE","LEEK","LEER","LEES","LEET","LEFT","LEGS","LEHR","LEIS","LEKE","LEKS","LEKU","LEND","LENO","LENS","LENT","LEPT","LESS","LEST","LETS","LEUD","LEVA","LEVO","LEVS","LEVY","LEWD","LEYS","LIAR","LIAS","LIBS","LICE","LICH","LICK","LIDO","LIDS","LIED","LIEF","LIEN","LIER","LIES","LIEU","LIFE","LIFT","LIKE","LILT","LILY","LIMA","LIMB","LIME","LIMN","LIMO","LIMP","LIMY","LINE","LING","LINK","LINN","LINO","LINS","LINT","LINY","LION","LIPA","LIPE","LIPO","LIPS","LIRA","LIRE","LIRI","LISP","LIST","LITE","LITS","LITU","LIVE","LOAD","LOAF","LOAM","LOAN","LOBE","LOBO","LOBS","LOCA","LOCH","LOCI","LOCK","LOCO","LODE","LOFT","LOGE","LOGO","LOGS","LOGY","LOID","LOIN","LOLL","LONE","LONG","LOOF","LOOK","LOOM","LOON","LOOP","LOOS","LOOT","LOPE","LOPS","LORD","LORE","LORN","LORY","LOSE","LOSS","LOST","LOTA","LOTH","LOTI","LOTO","LOTS","LOUD","LOUP","LOUR","LOUT","LOVE","LOWE","LOWN","LOWS","LUAU","LUBE","LUCE","LUCK","LUDE","LUDO","LUDS","LUES","LUFF","LUGE","LUGS","LULL","LULU","LUMA","LUMP","LUMS","LUNA","LUNE","LUNG","LUNK","LUNS","LUNT","LUNY","LURE","LURK","LUSH","LUST","LUTE","LUTZ","LUVS","LUXE","LWEI","LYCH","LYES","LYNX","LYRE","LYSE","MAAR","MABE","MACE","MACH","MACK","MACS","MADE","MADS","MAES","MAGE","MAGI","MAGS","MAID","MAIL","MAIM","MAIN","MAIR","MAKE","MAKI","MAKO","MALE","MALL","MALM","MALT","MAMA","MAMS","MANA","MANE","MANO","MANS","MANY","MAPS","MARA","MARC","MARE","MARG","MARK","MARL","MARS","MART","MASA","MASH","MASK","MASS","MAST","MATE","MATH","MATS","MATT","MAUD","MAUL","MAUN","MAUT","MAWN","MAWS","MAXI","MAYA","MAYO","MAYS","MAZE","MAZY","MEAD","MEAL","MEAN","MEAT","MECH","MEDS","MEED","MEEK","MEET","MEGA","MEGS","MELD","MELL","MELS","MELT","MEME","MEMO","MEMS","MEND","MENO","MENU","MEOU","MEOW","MERC","MERE","MERK","MERL","MESA","MESH","MESS","META","METE","METH","MEWL","MEWS","MEZE","MHOS","MIBS","MICA","MICE","MICS","MIDI","MIDS","MIEN","MIFF","MIGG","MIGS","MIKE","MILD","MILE","MILK","MILL","MILO","MILS","MILT","MIME","MINA","MIND","MINE","MINI","MINK","MINT","MINX","MIRE","MIRI","MIRK","MIRS","MIRY","MISE","MISO","MISS","MIST","MITE","MITT","MITY","MIXT","MOAN","MOAS","MOAT","MOBS","MOCK","MOCS","MODE","MODI","MODS","MOGS","MOHO","MOIL","MOJO","MOKE","MOLA","MOLD","MOLE","MOLL","MOLS","MOLT","MOLY","MOME","MOMI","MOMS","MONK","MONO","MONS","MONY","MOOD","MOOK","MOOL","MOON","MOOR","MOOS","MOOT","MOPE","MOPS","MOPY","MORA","MORE","MORN","MORS","MORT","MOSH","MOSK","MOSS","MOST","MOTE","MOTH","MOTS","MOTT","MOUE","MOVE","MOWN","MOWS","MOXA","MOZO","MUCH","MUCK","MUDS","MUFF","MUGG","MUGS","MULE","MULL","MUMM","MUMP","MUMS","MUMU","MUNG","MUNI","MUNS","MUON","MURA","MURE","MURK","MURR","MUSE","MUSH","MUSK","MUSO","MUSS","MUST","MUTE","MUTS","MUTT","MYCS","MYNA","MYTH","NAAN","NABE","NABS","NADA","NAES","NAFF","NAGA","NAGS","NAIF","NAIL","NALA","NAME","NANA","NANO","NANS","NAOI","NAOS","NAPA","NAPE","NAPS","NARC","NARD","NARE","NARK","NARY","NAVE","NAVS","NAVY","NAYS","NAZI","NEAP","NEAR","NEAT","NEBS","NECK","NEED","NEEM","NEEP","NEGS","NEIF","NEMA","NENE","NEON","NERD","NESS","NEST","NETS","NETT","NEUK","NEUM","NEVE","NEVI","NEWB","NEWS","NEWT","NEXT","NIBS","NICE","NICK","NIDE","NIDI","NIFF","NIGH","NILL","NILS","NIMS","NINE","NIPA","NIPS","NISI","NITE","NITS","NIXE","NIXY","NOBS","NOCK","NODE","NODI","NODS","NOEL","NOES","NOGG","NOGS","NOIL","NOIR","NOLO","NOMA","NOME","NOMS","NONA","NONE","NONI","NOOB","NOOK","NOON","NOPE","NORI","NORM","NOSE","NOSH","NOSY","NOTA","NOTE","NOUN","NOUS","NOVA","NOWS","NOWT","NUBS","NUDE","NUFF","NUGS","NUKE","NULL","NUMB","NUNS","NURD","NURL","NUTS","NYAH","OAFS","OAKS","OAKY","OARS","OAST","OATH","OATS","OATY","OBAS","OBES","OBEY","OBIA","OBIS","OBIT","OBOE","OBOL","OCAS","OCHE","ODAH","ODAS","ODDS","ODEA","ODES","ODIC","ODOR","ODYL","OFFS","OGAM","OGEE","OGLE","OGRE","OHED","OHIA","OHMS","OIKS","OILS","OILY","OINK","OKAS","OKAY","OKEH","OKES","OKRA","OLDE","OLDS","OLDY","OLEA","OLEO","OLES","OLIO","OLLA","OMAS","OMEN","OMER","OMIT","ONCE","ONES","ONLY","ONOS","ONTO","ONUS","ONYX","OOHS","OOPS","OOTS","OOZE","OOZY","OPAH","OPAL","OPAS","OPED","OPEN","OPES","OPPO","OPTS","OPUS","ORAD","ORAL","ORBS","ORBY","ORCA","ORCS","ORDO","ORES","ORGS","ORGY","ORLE","ORRA","ORTS","ORYX","ORZO","OSAR","OSES","OSSA","OTIC","OTTO","OUCH","OUDS","OUPH","OURS","OUST","OUTS","OUZO","OVAL","OVEN","OVER","OVUM","OWED","OWES","OWIE","OWLS","OWLY","OWNS","OWSE","OWTS","OXEN","OXER","OXES","OXIC","OXID","OXIM","OYER","OYES","OYEZ","PAAN","PACA","PACE","PACK","PACS","PACT","PACY","PADI","PADS","PAGE","PAID","PAIK","PAIL","PAIN","PAIR","PAKS","PALE","PALI","PALL","PALM","PALP","PALS","PALY","PAMS","PANE","PANG","PANS","PANT","PAPA","PAPS","PARA","PARD","PARE","PARK","PARR","PARS","PART","PASE","PASH","PASS","PAST","PATE","PATH","PATS","PATY","PAUA","PAVE","PAWL","PAWN","PAWS","PAYS","PEAG","PEAK","PEAL","PEAN","PEAR","PEAS","PEAT","PECH","PECK","PECS","PEDS","PEED","PEEK","PEEL","PEEN","PEEP","PEER","PEES","PEGS","PEHS","PEIN","PEKE","PELE","PELF","PELT","PEND","PENS","PENT","PEON","PEPO","PEPS","PERC","PERE","PERI","PERK","PERM","PERP","PERT","PERV","PESO","PEST","PETS","PEWS","PFFT","PFUI","PHAT","PHEO","PHEW","PHIS","PHIZ","PHON","PHOS","PHOT","PHUT","PIAL","PIAN","PIAS","PICA","PICE","PICK","PICS","PIED","PIER","PIES","PIGS","PIKA","PIKE","PIKI","PILE","PILI","PILL","PILY","PIMA","PIMP","PINA","PINE","PING","PINK","PINS","PINT","PINY","PION","PIPA","PIPE","PIPS","PIPY","PIRN","PISH","PISO","PITA","PITH","PITS","PITY","PIXY","PLAN","PLAT","PLAY","PLEA","PLEB","PLED","PLEW","PLEX","PLIE","PLOD","PLOP","PLOT","PLOW","PLOY","PLUG","PLUM","PLUS","POCK","POCO","PODS","POEM","POET","POGO","POGY","POIS","POKE","POKY","POLE","POLL","POLO","POLS","POLY","POME","POMO","POMP","POMS","POND","PONE","PONG","PONS","PONY","POOD","POOF","POOH","POOL","POON","POOP","POOR","POOS","POPE","POPS","PORE","PORK","PORN","PORT","POSE","POSH","POST","POSY","POTS","POUF","POUR","POUT","POWS","POXY","PRAM","PRAO","PRAT","PRAU","PRAY","PREE","PREP","PREX","PREY","PREZ","PRIG","PRIM","PROA","PROB","PROD","PROF","PROG","PROM","PROP","PROS","PROW","PSIS","PSST","PTUI","PUBE","PUBS","PUCE","PUCK","PUDS","PUDU","PUFF","PUGH","PUGS","PUJA","PUKE","PULA","PULE","PULI","PULK","PULL","PULP","PULS","PUMA","PUMP","PUNA","PUNG","PUNK","PUNS","PUNT","PUNY","PUPA","PUPS","PUPU","PURE","PURI","PURL","PURR","PURS","PUSH","PUSS","PUTS","PUTT","PUTZ","PYAS","PYES","PYIC","PYIN","PYRE","PYRO","QADI","QAID","QATS","QOPH","QUAD","QUAG","QUAI","QUAY","QUEY","QUID","QUIN","QUIP","QUIT","QUIZ","QUOD","RABI","RACE","RACK","RACY","RADS","RAFF","RAFT","RAGA","RAGE","RAGG","RAGI","RAGS","RAIA","RAID","RAIL","RAIN","RAIS","RAJA","RAKE","RAKI","RAKU","RALE","RAMI","RAMP","RAMS","RAND","RANG","RANI","RANK","RANT","RAPE","RAPS","RAPT","RARE","RASE","RASH","RASP","RATE","RATH","RATO","RATS","RAVE","RAWS","RAYA","RAYS","RAZE","RAZZ","READ","REAL","REAM","REAP","REAR","REBS","RECK","RECS","REDD","REDE","REDO","REDS","REED","REEF","REEK","REEL","REES","REFS","REFT","REGS","REIF","REIN","REIS","RELY","REMS","REND","RENO","RENT","REPO","REPP","REPS","RESH","REST","RETE","RETS","REVS","RHEA","RHOS","RHUS","RIAL","RIAS","RIBS","RICE","RICH","RICK","RIDE","RIDS","RIEL","RIFE","RIFF","RIFS","RIFT","RIGS","RILE","RILL","RIME","RIMS","RIMY","RIND","RING","RINK","RINS","RIOT","RIPE","RIPS","RISE","RISK","RITE","RITZ","RIVE","ROAD","ROAM","ROAN","ROAR","ROBE","ROBS","ROCK","ROCS","RODE","RODS","ROES","ROID","ROIL","ROLE","ROLF","ROLL","ROMP","ROMS","ROOD","ROOF","ROOK","ROOM","ROOS","ROOT","ROPE","ROPY","ROSE","ROSY","ROTA","ROTE","ROTI","ROTL","ROTO","ROTS","ROUE","ROUP","ROUT","ROUX","ROVE","ROWS","RUBE","RUBS","RUBY","RUCK","RUDD","RUDE","RUED","RUER","RUES","RUFF","RUGA","RUGS","RUIN","RUKH","RULE","RULY","RUMP","RUMS","RUNE","RUNG","RUNS","RUNT","RUSE","RUSH","RUSK","RUST","RUTH","RUTS","RYAS","RYES","RYKE","RYND","RYOT","RYUS","SABE","SABS","SACK","SACS","SADE","SADI","SAFE","SAGA","SAGE","SAGO","SAGS","SAGY","SAID","SAIL","SAIN","SAKE","SAKI","SALE","SALL","SALP","SALS","SALT","SAME","SAMP","SAND","SANE","SANG","SANK","SANS","SAPS","SARD","SARI","SARK","SASH","SASS","SATE","SATI","SAUL","SAVE","SAWN","SAWS","SAYS","SCAB","SCAD","SCAG","SCAM","SCAN","SCAR","SCAT","SCOP","SCOT","SCOW","SCRY","SCUD","SCUM","SCUP","SCUT","SEAL","SEAM","SEAR","SEAS","SEAT","SECS","SECT","SEED","SEEK","SEEL","SEEM","SEEN","SEEP","SEER","SEES","SEGO","SEIF","SEIS","SELF","SELL","SELS","SEME","SEMI","SEND","SENE","SENT","SEPS","SEPT","SERA","SERE","SERF","SERS","SESH","SETA","SETS","SETT","SEVS","SEWN","SEWS","SEXT","SEXY","SHAD","SHAG","SHAH","SHAM","SHAW","SHAY","SHEA","SHED","SHEN","SHES","SHEW","SHHH","SHIM","SHIN","SHIP","SHIV","SHMO","SHOD","SHOE","SHOG","SHOO","SHOP","SHOT","SHOW","SHRI","SHUL","SHUN","SHUT","SHWA","SIAL","SIBB","SIBS","SICE","SICK","SICS","SIDE","SIDH","SIFT","SIGH","SIGN","SIGS","SIKA","SIKE","SILD","SILK","SILL","SILO","SILT","SIMA","SIMP","SIMS","SINE","SING","SINH","SINK","SINS","SIPE","SIPS","SIRE","SIRS","SITE","SITH","SITS","SIZE","SIZY","SKAG","SKAS","SKAT","SKED","SKEE","SKEG","SKEP","SKEW","SKID","SKIM","SKIN","SKIP","SKIS","SKIT","SKOL","SKRY","SKUA","SLAB","SLAG","SLAM","SLAP","SLAT","SLAW","SLAY","SLED","SLEW","SLID","SLIM","SLIP","SLIT","SLOB","SLOE","SLOG","SLOP","SLOT","SLOW","SLUB","SLUE","SLUG","SLUM","SLUR","SMEW","SMIT","SMOG","SMUG","SMUT","SNAG","SNAP","SNAW","SNED","SNIB","SNIP","SNIT","SNOB","SNOG","SNOT","SNOW","SNUB","SNUG","SNYE","SOAK","SOAP","SOAR","SOBA","SOBS","SOCA","SOCK","SODA","SODS","SOFA","SOFT","SOHS","SOIL","SOJA","SOJU","SOKE","SOLA","SOLD","SOLE","SOLI","SOLO","SOLS","SOMA","SOME","SOMS","SONE","SONG","SONS","SOOK","SOON","SOOT","SOPH","SOPS","SORA","SORB","SORD","SORE","SORI","SORN","SORT","SOTH","SOTS","SOUK","SOUL","SOUP","SOUR","SOUS","SOWN","SOWS","SOYA","SOYS","SPAE","SPAM","SPAN","SPAR","SPAS","SPAT","SPAY","SPEC","SPED","SPEW","SPIN","SPIT","SPIV","SPOT","SPRY","SPUD","SPUE","SPUN","SPUR","SRIS","STAB","STAG","STAN","STAR","STAT","STAW","STAY","STEM","STEP","STET","STEW","STEY","STIM","STIR","STOA","STOB","STOP","STOT","STOW","STUB","STUD","STUM","STUN","STYE","SUBA","SUBS","SUCH","SUCK","SUDD","SUDS","SUED","SUER","SUES","SUET","SUGH","SUIT","SUKH","SUKS","SULK","SULU","SUMI","SUMO","SUMP","SUMS","SUMY","SUNG","SUNK","SUNN","SUNS","SUPE","SUPS","SUQS","SURA","SURD","SURE","SURF","SUSS","SWAB","SWAG","SWAM","SWAN","SWAP","SWAT","SWAY","SWIG","SWIM","SWOB","SWOP","SWOT","SWUM","SYBO","SYCE","SYKE","SYLI","SYNC","SYNE","SYPH","TABS","TABU","TACE","TACH","TACK","TACO","TACT","TADS","TAEL","TAGS","TAHR","TAIL","TAIN","TAKA","TAKE","TALA","TALC","TALE","TALI","TALK","TALL","TAME","TAMP","TAMS","TANG","TANK","TANS","TAOS","TAPA","TAPE","TAPS","TARE","TARN","TARO","TARP","TARS","TART","TASE","TASK","TASS","TATE","TATS","TAUS","TAUT","TAVS","TAWS","TAXA","TAXI","TEAK","TEAL","TEAM","TEAR","TEAS","TEAT","TECH","TECS","TEDS","TEED","TEEL","TEEM","TEEN","TEES","TEFF","TEGG","TEGS","TEGU","TEIN","TELA","TELE","TELL","TELS","TEMP","TEND","TENS","TENT","TEPA","TERM","TERN","TEST","TETH","TETS","TEWS","TEXT","THAE","THAN","THAT","THAW","THEE","THEM","THEN","THEW","THEY","THIN","THIO","THIR","THIS","THOU","THRO","THRU","THUD","THUG","THUS","TIAN","TICK","TICS","TIDE","TIDY","TIED","TIER","TIES","TIFF","TIKE","TIKI","TILE","TILL","TILS","TILT","TIME","TINE","TING","TINS","TINT","TINY","TIPI","TIPS","TIRE","TIRL","TIRO","TITI","TITS","TIVY","TIYN","TIZZ","TOAD","TOBY","TOCK","TOCO","TODS","TODY","TOEA","TOED","TOES","TOFF","TOFT","TOFU","TOGA","TOGS","TOIL","TOIT","TOKE","TOLA","TOLD","TOLE","TOLL","TOLT","TOLU","TOMB","TOME","TOMS","TONE","TONG","TONS","TONY","TOOK","TOOL","TOOM","TOON","TOOT","TOPE","TOPH","TOPI","TOPO","TOPS","TORA","TORC","TORE","TORI","TORN","TORO","TORR","TORS","TORT","TORY","TOSA","TOSH","TOSS","TOST","TOTE","TOTS","TOUR","TOUT","TOWN","TOWS","TOWY","TOYO","TOYS","TRAD","TRAM","TRAP","TRAY","TREE","TREF","TREK","TREM","TRET","TREY","TRIG","TRIM","TRIO","TRIP","TROD","TROG","TROP","TROT","TROU","TROW","TROY","TRUE","TRUG","TSAR","TSKS","TUBA","TUBE","TUBS","TUCK","TUFA","TUFF","TUFT","TUGS","TUIS","TULE","TUMP","TUMS","TUNA","TUNE","TUNG","TUNS","TUPS","TURF","TURK","TURN","TURR","TUSH","TUSK","TUTS","TUTU","TWAE","TWAS","TWEE","TWIG","TWIN","TWIT","TWOS","TYEE","TYER","TYES","TYIN","TYKE","TYNE","TYPE","TYPO","TYPP","TYPY","TYRE","TYRO","TZAR","UDON","UDOS","UGHS","UGLY","UKES","ULAN","ULNA","ULUS","ULVA","UMBO","UMMA","UMPH","UMPS","UNAI","UNAU","UNBE","UNCI","UNCO","UNDE","UNDO","UNDY","UNIS","UNIT","UNTO","UPAS","UPBY","UPDO","UPON","URBS","URDS","UREA","URGE","URIC","URNS","URPS","URSA","URUS","USED","USER","USES","UTAS","UTES","UVEA","VACS","VAGI","VAIL","VAIN","VAIR","VALE","VAMP","VANE","VANG","VANS","VAPE","VARA","VARS","VARY","VASA","VASE","VAST","VATS","VATU","VAUS","VAVS","VAWS","VAXX","VEAL","VEEP","VEER","VEES","VEGA","VEIL","VEIN","VELA","VELD","VENA","VEND","VENT","VERA","VERB","VERT","VERY","VEST","VETO","VETS","VEXT","VIAL","VIBE","VICE","VIDE","VIDS","VIED","VIER","VIES","VIEW","VIFF","VIGA","VIGS","VILE","VILL","VIMS","VINA","VINE","VINO","VINS","VINY","VIOL","VIRL","VISA","VISE","VITA","VIVA","VIVE","VLEI","VLOG","VOES","VOGS","VOID","VOLE","VOLK","VOLT","VOTE","VOWS","VROW","VUGG","VUGH","VUGS","VULN","WAAH","WABS","WACK","WADE","WADI","WADS","WADY","WAES","WAFF","WAFT","WAGE","WAGS","WAIF","WAIL","WAIN","WAIR","WAIT","WAKE","WALE","WALI","WALK","WALL","WALY","WAME","WAND","WANE","WANS","WANT","WANY","WAPS","WARD","WARE","WARK","WARM","WARN","WARP","WARS","WART","WARY","WASH","WASP","WAST","WATS","WATT","WAUK","WAUL","WAUR","WAVE","WAVY","WAWL","WAWS","WAXY","WAYS","WEAK","WEAL","WEAN","WEAR","WEBS","WEDS","WEED","WEEK","WEEL","WEEN","WEEP","WEER","WEES","WEET","WEFT","WEIR","WEKA","WELD","WELL","WELP","WELT","WEND","WENS","WENT","WEPT","WERE","WERT","WEST","WETA","WETS","WHAM","WHAP","WHAT","WHEE","WHEN","WHET","WHEW","WHEY","WHID","WHIG","WHIM","WHIN","WHIP","WHIR","WHIT","WHIZ","WHOA","WHOM","WHOP","WHUP","WHYS","WICH","WICK","WIDE","WIFE","WIGS","WIKI","WILD","WILE","WILL","WILT","WILY","WIMP","WIND","WINE","WING","WINK","WINO","WINS","WINY","WIPE","WIRE","WIRY","WISE","WISH","WISP","WISS","WIST","WITE","WITH","WITS","WIVE","WOAD","WOES","WOKE","WOKS","WOLD","WOLF","WOMB","WONK","WONS","WONT","WOOD","WOOF","WOOL","WOOS","WORD","XYST","YACK","YAFF","YAGE","YAGI","YAGS","YAJE","YAKS","YALD","YAMS","YANG","YANK","YAPS","YARD","YARE","YARN","YAUD","YAUP","YAWL","YAWN","YAWP","YAWS","YAYS","YEAH","YEAN","YEAR","YEAS","YECH","YEGG","YELD","YELK","YELL","YELP","YENS","YEOW","YEPS","YERK","YETI","YETT","YEUK","YEWS","YILL","YINS","YIPE","YIPS","YIRD","YIRR","YLEM","YOBS","YOCK","YODH","YODS","YOGA","YOGH","YOGI","YOKE","YOKS","YOLK","YOMP","YOND","YONI","YOOF","YORE","YOUR","YOUS","YOWE","YOWL","YOWS","YUAN","YUCA","YUCH","YUCK","YUGA","YUKE","YUKS","YULE","YUPS","YURT","YUTZ","YUZU","YWIS","ZAGS","ZANY","ZAPS","ZARF","ZEAL","ZEBU","ZEDA","ZEDS","ZEES","ZEIN","ZEKS","ZEPS","ZERK","ZERO","ZEST","ZETA","ZIGS","ZILL","ZINC","ZINE","ZING","ZINS","ZIPS","ZITI","ZITS","ZIZZ","ZOEA","ZOIC","ZONA","ZONE","ZONK","ZOOM","ZOON","ZOOS","ZORI","ZOUK","ZUKE","ZYME"];
const gameGrid = document.getElementById("gameGrid");
const errorMessage = document.getElementById("errorMessage");
const scoreBoard = document.getElementById("scoreBoard");
const undoBtn = document.getElementById("undoBtn");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");
const userEntryRow = document.getElementById("userEntryRow");
const NUMBER_OF_GUESSES = 5;
let guessesRemaining = NUMBER_OF_GUESSES;
let attempts = [];
let win = false;
let nextLetter = 0;
let undoCount = 0;
let resetCount = -1;


// Helper function to check if two words are one letter apart and have the same set of letters (order doesn't matter)
function isOneLetterChange(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    // Count letter frequencies for both words
    const countLetters = (word) => {
        const letterCount = {};
        for (const letter of word) {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
        return letterCount;
    };

    const count1 = countLetters(word1);
    const count2 = countLetters(word2);

    // Calculate the total difference between the words
    let totalDifference = 0;
    for (const letter in count1) {
        const difference = Math.abs((count1[letter] || 0) - (count2[letter] || 0));
        totalDifference += difference;
    }

    for (const letter in count2) {
        if (!(letter in count1)) {
            totalDifference += count2[letter];
        }
    }

    // Total difference should equal 2 to account for a single changed letter
    return totalDifference === 2;
}


function validateWord(word) {
    word=word.toUpperCase();
    let lastWord = startWord;
    if (word.length !== startWord.length) {
        return "Word must have the correct number of letters.";
    }
    if (!validWords.includes(word)) {
        return `${word} is not in the list of valid words.`;
    }
    if (attempts.includes(word)) {
        return `${word} has already been submitted. Use undo or try another word.`;
    }
    if (word === startWord) {
        return "You cannot use the start word. Use undo or try another word."
    }
    if (attempts.length > 0) {
        lastWord = attempts[attempts.length - 1];
    }
    if (!isOneLetterChange(word,lastWord)) {
        return "Word must differ by exactly one letter.";
    }
    return null;
}

function addGridRow(word = "") {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    for (let i = 0; i < startWord.length; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        if (word) {
            cell.textContent = word[i];
            if (word[i] === endWord[i]) {
                cell.classList.add("correct");
            } else if (endWord.includes(word[i])) {
                cell.classList.add("misplaced");
            } else {
                cell.classList.add("wrong");
            }
        }
        row.appendChild(cell);
    }
    gameGrid.insertBefore(row, userEntryRow);
    
    if (win === true) {
        document.getElementById("userEntryRow").remove();
        document.getElementById("controls").remove();
        document.getElementById("keyboard-cont").remove();
    }
}

function handleSubmitWord() {
    const inputs = userEntryRow.querySelectorAll(".grid-cell");
    const word = Array.from(inputs).map(cell => cell.value.toUpperCase()).join("");
    const validationError = validateWord(word);
    if (validationError) {
        errorMessage.textContent = validationError;
    } else {
        if (word === endWord) {
            win = true;
        }
        errorMessage.textContent = "";
        attempts.push(word);
        addGridRow(word);
        inputs.forEach(input => input.value = "");
        updateScore();
        undoBtn.disabled = false;
        resetBtn.disabled = false;
        nextLetter = 0               
    }
}

function resetGame() {
    gameGrid.innerHTML = "";
    gameGrid.appendChild(userEntryRow);
    errorMessage.textContent = "";
    const inputFields = document.querySelectorAll('input');

    inputFields.forEach(input => {
        input.value = '';
    });
    attempts = [];
    resetCount++;
    scoreBoard.textContent = "";
    undoBtn.disabled = true;
    resetBtn.disabled = true;
    nextLetter = 0 
}

function undoLastMove() {
    if (attempts.length > 0) {
        const lastWord = attempts.pop();
        gameGrid.removeChild(gameGrid.children[gameGrid.children.length - 2]);
        const undoRow = document.createElement("div");
        undoRow.textContent = `Undo: ${lastWord}`;
        scoreBoard.appendChild(undoRow);
        updateScore(false);
        if (attempts.length === 0) {
            undoBtn.disabled = true;
            resetBtn.disabled = true;
        }
        const inputFields = document.querySelectorAll('input');

        inputFields.forEach(input => {
            input.value = '';
            });

        errorMessage.textContent = "";
        nextLetter = 0 
        undoCount++;
        updateScore();
    }
}

function updateScore() {
    const scoreGrid = document.createElement("div");
    scoreGrid.classList.add("score-grid");

    // Add each attempt as a row
    attempts.forEach((word) => {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let i = 0; i < word.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");

            // Add color classes based on Wordle rules
            if (word[i] === endWord[i]) {
                cell.classList.add("correct");
            } else if (endWord.includes(word[i])) {
                cell.classList.add("misplaced");
            } else {
                cell.classList.add("wrong");
            }
            row.appendChild(cell);
        }
        scoreGrid.appendChild(row);
    });

    // Add undo and reset counts
    const undoCountText = document.createElement("div");
    undoCountText.textContent = `Undos used: ${undoCount}`;
    const resetCountText = document.createElement("div");
    resetCountText.textContent = `Resets used: ${resetCount}`;
    const sequenceLengthText = document.createElement("div");
    sequenceLengthText.textContent = `Sequence length: ${attempts.length}`;

    // Clear previous score display
    //scoreBoard.innerHTML = `Score: ${attempts.length}`;
    win ? scoreBoard.innerHTML = "Congratulations!" : scoreBoard.innerHTML = "";
    scoreBoard.appendChild(scoreGrid);
    scoreBoard.appendChild(sequenceLengthText);
    scoreBoard.appendChild(undoCountText);
    scoreBoard.appendChild(resetCountText);
    
}

//text entry eventListener
document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        handleSubmitWord()
        return
    }

    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nextLetter === 4) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementById("userEntryRow")
    let box = row.children[nextLetter]
    box.value = pressedKey
    box.classList.add("filled-box")
    nextLetter += 1
}

function deleteLetter () {
    let row = document.getElementById("userEntryRow")
    let box = row.children[nextLetter - 1]
    box.value = ""
    box.classList.remove("filled-box")
    nextLetter -= 1
}

resetBtn.addEventListener("click", () => {
    resetBtn.blur();
    resetGame();
});

undoBtn.addEventListener("click", ()=> {
    undoBtn.blur();
    undoLastMove();
});

submitBtn.addEventListener("click", ()=> {
    submitBtn.blur();
    handleSubmitWord();
});

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target

    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

resetGame();
