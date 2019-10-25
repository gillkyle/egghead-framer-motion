/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi"

const PlayButton = ({ props }) => {
  const [playing, setPlaying] = useState(true)

  return playing ? (
    <FiPlayCircle
      onClick={() => setPlaying(!playing)}
      size={48}
      sx={{ cursor: `pointer` }}
    />
  ) : (
    <FiPauseCircle
      onClick={() => setPlaying(!playing)}
      size={48}
      sx={{ cursor: `pointer` }}
    />
  )
}

export default PlayButton
