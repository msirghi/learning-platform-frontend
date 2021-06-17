import { GradeType } from '../../common/enums';
import i18n from '../../i18n';

const getRelevantTranslation = (type: GradeType) => {
  switch (type) {
    case GradeType.ATTESTATION_1:
      return i18n.t('performance:testTypes.attestation1');
    case GradeType.ATTESTATION_2:
      return i18n.t('performance:testTypes.attestation2');
    case GradeType.EXAM:
      return i18n.t('performance:testTypes.exam');
    case GradeType.INDIVIDUAL_WORK:
      return i18n.t('performance:testTypes.individualWork');
    case GradeType.FINAL:
      return i18n.t('performance:testTypes.final');
  }
};

export default {
  getRelevantTranslation
};
