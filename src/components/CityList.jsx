import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// import { PropTypes } from "prop-types";
//
// CityList.propTypes = {
//   cities: PropTypes.array,
//   isLoading: PropTypes.bool,
// };
function CityList() {
  const { cities, isLoading } = useCities();
  console.log(`Nah iki : ${cities}`);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking the city on the map" />
    );
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
