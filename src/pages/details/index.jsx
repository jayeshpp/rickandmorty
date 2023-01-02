import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ShimmerDetails from "../../components/character-details/shimmer";
import CharacterDetails from "../../components/character-details";
import PageHead from "../../components/page-head";
import { setCharacter } from "./actions";
import { details } from "./selectors";

function CharacterList() {
  const characterId = useParams().id;
  const character = useSelector(details.getCharacter);
  const isLoading = useSelector(details.getLoading);
  const error = useSelector(details.getError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(setCharacter(characterId));
  }, [characterId]);

  return (
    <>
      <PageHead>
        <span className="cursor-pointer" onClick={onBack}>
          Back
        </span>
      </PageHead>
      <section className="container">
        {(!Object.values(character).length && !isLoading) || error ? (
          <div>No results found</div>
        ) : isLoading ? (
          <ShimmerDetails />
        ) : (
          <CharacterDetails {...character} />
        )}
      </section>
    </>
  );
}

export default CharacterList;
