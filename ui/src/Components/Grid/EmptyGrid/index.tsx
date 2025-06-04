import type { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { faSmile } from "@fortawesome/free-solid-svg-icons/faSmile";

import type { Settings } from "Stores/Settings";

import { CenteredMessage } from "Components/CenteredMessage";

const iconMap: { [key: string]: IconDefinition } = {
  "mug-hot": faMugHot,
  coffee: faCoffee,
  smile: faSmile,
};

const EmptyGrid: FC<{ settingsStore: Settings }> = ({ settingsStore }) => {
  const iconName = settingsStore.emptyAlertIcon.toLowerCase();
  const icon = iconMap[iconName] || faMugHot;
  return (
    <CenteredMessage>
      <FontAwesomeIcon
        icon={icon}
        className="screen-center-icon-big text-placeholder"
      />
    </CenteredMessage>
  );
};

export { EmptyGrid };
