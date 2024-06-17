"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { useLocale } from "use-intl";

function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocal = e.target.value;

    console.log(nextLocal);

    startTransition(() => {
      router.replace(`/${nextLocal}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">change lang</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="fa">Farsi</option>
      </select>
    </label>
  );
}

export default LocalSwitcher;
