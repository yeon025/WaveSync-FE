"use client";


interface Props {
  nodes: ResonanceNode[];
}

export default function ResonanceNodeEditor({ nodes }: Props) {
  const activeNodes = nodes.filter((n) => n.active);

  return (
  <section className="flex w-[550px] flex-col">
    <h1 className="text-3xl font-bold text-white">
      공명 노드
    </h1>

    <div className="relative mt-6 h-[738px] w-[550px] rounded-[10px] border border-[#848484]">
    {/* {nodes.map((node, idx) => (
        <div
        key={idx}
        className={`absolute h-3 w-3 rounded-full ${
            node.active ? "bg-[#d6b15c]" : "bg-gray-600"
        }`}
        style={{
            left: getNodePosition(node).x,
            top: getNodePosition(node).y,
        }}
        />
    ))} */}
    </div>
  </section>
  );
}