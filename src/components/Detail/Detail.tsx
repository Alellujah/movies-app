import React, { Component } from 'react';
import { Modal, Backdrop, ModalContent, ModalRight, ModalLeft, Lines, Row, CloseModalBtn } from './styleComponents';

interface IDetailsProps {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  popularity: number;
  original_language: string;
  poster_path: string;
  showModal: boolean;
  onClose: () => void;
}

class Detail extends Component<IDetailsProps> {
  render() {
    const { title,
      original_title,
      release_date,
      vote_average,
      overview,
      popularity,
      original_language,
      poster_path,
      onClose,
      showModal } = this.props;
    return (
      <>
        {showModal &&
          <Backdrop data-testid="detail-id" onClick={(e) => (e.target === e.currentTarget && onClose())}>
            <Modal>
              <ModalContent>
                {poster_path &&
                  <ModalLeft>
                    <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  </ModalLeft>
                }
                <ModalRight>
                  <h1>{title}</h1>
                  <Row>
                    <Lines><span>Original Title: </span><div>{original_title}</div></Lines>
                    <Lines><span>Release Date: </span><div>{release_date}</div></Lines>
                    <Lines><span>Popularity:</span> <div>{popularity}</div></Lines>
                    <Lines><span>Original Language:</span> <div>{original_language}</div></Lines>
                    <Lines><span>Vote Avg:</span> <div>{vote_average}</div></Lines>
                  </Row>
                  <Lines><span>Overview:</span> <div>{overview}</div></Lines>
                  <CloseModalBtn onClick={onClose}> X </CloseModalBtn>
                </ModalRight>
              </ModalContent>
            </Modal>
          </Backdrop>
        }
      </>
    );
  }
}

export default Detail;