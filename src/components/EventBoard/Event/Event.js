import PropTypes from 'prop-types';

import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaUserAlt } from '@react-icons/all-files/fa/FaUserAlt';
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { Card, EventName, Info, Chip } from './Event.styled';

import { formatEventDuration, formatEventStart } from '../../../helpers';
function Event({ name, location, speaker, type, start, end }) {
  const fornatDateStart = formatEventStart(start);
  const formatDurationEvent = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt />
        {location}
      </Info>
      <Info>
        <FaUserAlt />

        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt />

        {fornatDateStart}
      </Info>
      <Info>
        <FaClock />

        {formatDurationEvent}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
}
export default Event;
Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
