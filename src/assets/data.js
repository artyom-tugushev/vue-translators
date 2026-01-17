import moscow from './regions/moscow';
import petersburg from './regions/petersburg';
import regions from './regions/regions';
import minsk from './regions/minsk';
import kiev from './regions/kiev';
import astana from './regions/astana';
import almaty from './regions/almaty';
import aktobe from './regions/aktobe';
import italy from './regions/italy';
import uzbekistan from './regions/uzbekistan';
import armenia from './regions/armenia';
import azerbaijan from './regions/azerbaijan';
import georgia from './regions/georgia';

regions.sort((a, b) => a.region.localeCompare(b.region));

const arraysForSorting = [moscow, petersburg, minsk, kiev, georgia];
arraysForSorting.map(arr =>
  arr.sort((a, b) => a['name'].localeCompare(b['name']))
);

const data = [
  ...moscow,
  ...petersburg,
  ...regions,
  ...minsk,
  ...kiev,
  ...astana,
  ...almaty,
  ...aktobe,
  ...italy,
  ...uzbekistan,
  ...armenia,
  ...azerbaijan,
  ...georgia,
];

export default data;
