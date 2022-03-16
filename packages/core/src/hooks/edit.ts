import { useAtomValue } from 'jotai'
import { editModeAtom } from '../state/atoms'

/**
 * Determine if one is in edit mode
 * @returns true if is edit mode
 */
export function useIsEditMode() {
  return useAtomValue(editModeAtom)
}
