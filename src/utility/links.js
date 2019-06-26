const home = () =>{
  return `/`
}
const staticLink = staticLink => {
  return `/${staticLink}`;
};
const gameDetails = (Rank) =>{
  return`/rank/${Rank}`;
}

export default {
  home,
  staticLink,
  gameDetails
};
