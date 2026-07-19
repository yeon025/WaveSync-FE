"use client";

import { useState } from "react";
import { updateResonator } from "@/api/resonator.api";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import ResonanceNodeEditor from "@/components/resonator-setting/ResonanceNodeEditor";
import WeaponEditor from "@/components/resonator-setting/WeaponEditor";

interface Props {
  userResonatorId: string;
  resonatorSetting: ResonatorSettingResponse;
}

export default function ResonatorSetting({ userResonatorId, resonatorSetting }: Props) {
  const [nodes, setNodes] = useState(resonatorSetting.nodes);
  const [weapon, setWeapon] = useState(resonatorSetting.weapon);
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "" });

  const handleSave = async () => {
    const result = await updateResonator(userResonatorId, {
      weaponRefineLevel: weapon.refineLevel,
      nodes,
    });

    if (result.code != "OK") {
      setModal({
        isOpen: true,
        title: "수정 실패",
        message: result.message,
      });
      return;
    }

    setModal({
      isOpen: true,
      title: "수정 완료",
      message: `공명자 정보가 수정되었습니다.`,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <ResonanceNodeEditor nodes={nodes} onChange={setNodes} />
        <WeaponEditor weapon={weapon} onChange={setWeapon} />
      </div>

      <div className="my-10 flex justify-center">
        <Button onClick={handleSave}>설정 변경</Button>
      </div>

      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            isOpen: false,
          }))
        }
      />
    </div>
  );
}
