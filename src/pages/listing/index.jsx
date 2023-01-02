import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import CharacterCard from "../../components/character-card";
import ShimmerList from "../../components/character-card/shimmer";
import PageHead from "../../components/page-head";
import Pagination from "../../components/pagination";
import Select from "../../components/select";
import { getQueryString } from "../../lib/utils/getQueryString";
import { setCharacters, setFilters } from "./actions";
import { listing } from "./selectors";
import { getFilters } from "../../lib/utils/getFilters";
import Input from "../../components/input";

function CharacterList() {
  const [searchParams] = useSearchParams();
  const filters = getFilters(searchParams);
  const [value, setValue] = useState(() => {
    return filters.name ? filters.name : ''
  })
  const characters = useSelector(listing.getCharacters);
  const totalRecords = useSelector(listing.getInfo);
  const isLoading = useSelector(listing.getLoading);
  const error = useSelector(listing.getError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPagination = (page) => {
    navigate({
      search: getQueryString({ ...filters, page }),
    });
    dispatch(setFilters({ page }));
  };

  const onSelect = (event) => {
    const { value } = event.target;
    navigate({
      search: getQueryString({ ...filters, gender: value }),
    });
    dispatch(setFilters({ gender: value }));
  };

  const onKeyDown = (event) => {
    const { value } = event.target;
    if (event.key === "Enter") {
      navigate({
        search: getQueryString({ ...filters, name: value }),
      });
      dispatch(setFilters({ name: value }));
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    setValue(value)
  }

  const onClick = (characterId) => {
    navigate(`/details/${characterId}`);
  };

  useEffect(() => {
    let payload = getFilters(searchParams);
    dispatch(setCharacters(payload));
  }, [searchParams]);

  return (
    <>
      <PageHead>
        <div className="filter">
          <Select
            onSelect={onSelect}
            selected={filters.gender}
            className="mr-2"
          />
          <Input placeholder="Search by name" onChange={onChange} onKeyDown={onKeyDown} value={value} />
        </div>
      </PageHead>
      <section className="container">
        {(!characters.length && !isLoading) || error ? (
          <div>No results found</div>
        ) : isLoading ? (
          //TODO: loading state can be improved with proper effect
          <ShimmerList />
        ) : (
          characters?.map((character) => (
            <CharacterCard
              key={character.id}
              {...character}
              onClick={onClick}
            />
          ))
        )}
      </section>
      <Pagination
        totalRecords={totalRecords.count}
        perPage={20}
        activePage={filters.page}
        handlePagination={onPagination}
      />
    </>
  );
}

export default CharacterList;
